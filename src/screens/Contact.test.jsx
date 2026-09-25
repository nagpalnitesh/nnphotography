import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import Contact from './Contact';
import { CONTACT_ENDPOINT, sendContactMessage } from '../utils/contact';

const fill = () => {
  fireEvent.change(screen.getByLabelText(/First Name/), { target: { value: 'Asha' } });
  fireEvent.change(screen.getByLabelText(/Last Name/), { target: { value: 'Rao' } });
  fireEvent.change(screen.getByLabelText(/E-mail/), { target: { value: 'asha@example.com' } });
  fireEvent.change(screen.getByLabelText(/Subject/), { target: { value: 'Prints' } });
  fireEvent.change(screen.getByLabelText(/Message/), { target: { value: 'Hello there' } });
};

const jsonResponse = (status, body) => ({
  ok: status >= 200 && status < 300,
  status,
  json: () => Promise.resolve(body),
});

describe('Contact form', () => {
  let errorSpy;
  beforeEach(() => {
    errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });
  afterEach(() => {
    errorSpy.mockRestore();
    delete global.fetch;
  });

  it('shows in-progress state, blocks double submit, then confirms and clears on success', async () => {
    let resolve;
    global.fetch = jest.fn(() => new Promise((r) => { resolve = r; }));
    render(<Contact />);
    fill();

    const submit = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submit);
    expect(screen.getByRole('status')).toHaveTextContent(/sending/i);
    expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled();
    fireEvent.submit(submit.closest('form'));
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch.mock.calls[0][0]).toBe(CONTACT_ENDPOINT);
    expect(JSON.parse(global.fetch.mock.calls[0][1].body)).toMatchObject({
      first_name: 'Asha', email: 'asha@example.com', phone: '', message: 'Hello there',
    });
    // Nothing is cleared before the server acknowledges.
    expect(screen.getByLabelText(/Message/)).toHaveValue('Hello there');

    await act(async () => resolve(jsonResponse(200, { success: true })));
    expect(screen.getByRole('status')).toHaveTextContent(/message has been sent/i);
    expect(screen.getByLabelText(/Message/)).toHaveValue('');
    expect(screen.getByLabelText(/First Name/)).toHaveValue('');
  });

  it('shows an error and keeps typed content on HTTP error', async () => {
    global.fetch = jest.fn(() => Promise.resolve(jsonResponse(500, { success: false })));
    render(<Contact />);
    fill();
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(/couldn't be sent/i));
    expect(screen.getByRole('status')).not.toHaveTextContent(/sent/i);
    expect(screen.getByLabelText(/Message/)).toHaveValue('Hello there');
    expect(screen.getByLabelText(/E-mail/)).toHaveValue('asha@example.com');
    const fallback = within(screen.getByRole('alert')).getByRole('link');
    expect(fallback).toHaveAttribute('href', 'mailto:niteshnagpalphotography@gmail.com');
    expect(screen.getByRole('button', { name: /send message/i })).toBeEnabled();
  });

  it('shows an error and keeps typed content on network failure', async () => {
    global.fetch = jest.fn(() => Promise.reject(new TypeError('Failed to fetch')));
    render(<Contact />);
    fill();
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(/couldn't be sent/i));
    expect(screen.getByLabelText(/Subject/)).toHaveValue('Prints');
  });

  it('labels match validation: phone optional, the rest required', () => {
    global.fetch = jest.fn();
    render(<Contact />);
    expect(screen.getByLabelText(/Phone Number \(optional\)/)).not.toBeRequired();
    [/First Name \(required\)/, /Last Name \(required\)/, /E-mail \(required\)/,
      /Subject \(required\)/, /Message \(required\)/].forEach((label) =>
      expect(screen.getByLabelText(label)).toBeRequired(),
    );
  });
});

describe('sendContactMessage', () => {
  it('rejects a 200 whose body reports success: false', async () => {
    const fetchImpl = jest.fn(() => Promise.resolve(jsonResponse(200, { success: false })));
    await expect(sendContactMessage({}, { fetchImpl })).rejects.toThrow('rejected');
  });

  it('times out and rejects', async () => {
    jest.useFakeTimers();
    const fetchImpl = jest.fn((url, { signal }) => new Promise((_, reject) => {
      signal.addEventListener('abort', () => {
        const err = new Error('aborted');
        err.name = 'AbortError';
        reject(err);
      });
    }));
    const p = sendContactMessage({}, { fetchImpl, timeoutMs: 1000 });
    jest.advanceTimersByTime(1000);
    await expect(p).rejects.toThrow('timeout');
    jest.useRealTimers();
  });
});
