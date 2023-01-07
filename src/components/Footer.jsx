/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Jorabek.</span>
        <div className="links">
          <a href="https://t.me/Jorabek_Jorayev_10">
            <i className="fab fa-telegram"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCzQGhy2_Hc7hdOJQaOu-DxA">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.linkedin.com/in/jorabek-joraev-a1002a240/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Jorabek
        </p>
      </div>
    </footer>
  );
}

export default Footer;
