export const CONTACT_ENDPOINT = 'https://backend.nnphotography.in/send-email';
export const CONTACT_EMAIL = 'niteshnagpalphotography@gmail.com';
export const CONTACT_TIMEOUT_MS = 15000;

// Resolves only when the backend acknowledges the send: HTTP 2xx and, if the
// response body is JSON with a `success` flag, that flag is true. Rejects on
// HTTP errors, network failures and timeouts.
export const sendContactMessage = async (
  formData,
  { fetchImpl = fetch, timeoutMs = CONTACT_TIMEOUT_MS } = {},
) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  let response;
  try {
    response = await fetchImpl(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
      signal: controller.signal,
    });
  } catch (error) {
    throw new Error(
      error?.name === 'AbortError' ? 'timeout' : 'network',
    );
  } finally {
    clearTimeout(timer);
  }

  if (!response.ok) throw new Error(`http_${response.status}`);

  let body = null;
  try {
    body = await response.json();
  } catch {
    // A 2xx without a JSON body still counts as acknowledged.
  }
  if (body && body.success === false) throw new Error('rejected');
  return body;
};
