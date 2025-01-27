import React from "react";

import Logo from "../assets/Photography_Logo_crop.png";

const Footer = () => {
  const d = new Date();

  return (
    <div className="footer-section">
      <div className="footer">
        <a href="/" className="footer-brand nav-brand">
          <img src={ Logo } alt="nn photography" className="logo-navbar" />
        </a>
        <div className="footer-social-menu">
          <div className="dot-separator main-dot-separator w-hidden-tiny w-condition-invisible">
            <div>•</div>
          </div>
          <a
            href="https://youpic.com/photographer/NN_Photography/"
            className="footer-social-link w-inline-bock"
            target="_blank"
            rel="noreferrer"
          >
            <div>Youpic</div>
            <div className="underline footer-social-underline"></div>
          </a>
          <div className="dot-separator main-dot-separator w-hidden-tiny ">
            <div>•</div>
          </div>
          <a
            href="https://www.instagram.com/__nnphotography__/"
            className="footer-social-link w-inline-bock"
            target="_blank"
            rel="noreferrer"
          >
            <div>Instagram</div>
            <div className="underline footer-social-underline"></div>
          </a>
          <div className="dot-separator main-dot-separator w-hidden-tiny ">
            <div>•</div>
          </div>
          <a
            href="https://www.facebook.com/nnphotography09"
            className="footer-social-link w-inline-bock"
            target="_blank"
            rel="noreferrer"
          >
            <div>Facebook</div>
            <div className="underline footer-social-underline"></div>
          </a>
          <div className="dot-separator main-dot-separator w-hidden-tiny ">
            <div>•</div>
          </div>
          <a
            href="https://twitter.com/_niteshnagpal_"
            className="footer-social-link w-inline-bock"
            target="_blank"
            rel="noreferrer"
          >
            <div>Twitter</div>
            <div className="underline footer-social-underline"></div>
          </a>
          <div className="dot-separator main-dot-separator w-hidden-tiny ">
            <div>•</div>
          </div>
          <a
            href="https://500px.com/p/niteshnagpal"
            className="footer-social-link w-inline-bock"
            target="_blank"
            rel="noreferrer"
          >
            <div>500px</div>
            <div className="underline footer-social-underline"></div>
          </a>
        </div>
        <div className="copyright">
          <div className="copyright-text">
            <p>
              Developed by <a href="https://niteshnagpal.com" className="footer-social-link"
                target="_blank"
                rel="noreferrer"><b>NITESH NAGPAL</b></a>
            </p>
            {/* <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="footer-link w-inline-block"
            >
              Pixxmo Online Services Pvt. Ltd.
            </a> */}
          </div>
          <div className="footer-line-separator">|</div>
          <div className="copyright-text">
            <p>All Rights Reserved</p>
          </div>
          <div className="footer-line-separator">|</div>
          <div className="copyright-text">
            <p>Copyright &copy; { d.getFullYear() }</p>
          </div>
          {/* <a href="/" target="_blank" className="footer-link w-inline-block">
            Pixxmo Online Services Pvt. Ltd.
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
