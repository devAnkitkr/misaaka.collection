import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="social-links">
        <li>
          <a href="https://www.facebook.com/misaaka.collection" target="blank">Facebook</a>
        </li>
        <li>
          <a href="https://www.instagram.com/misaaka.collection/" target="blank">Instagram</a>
        </li>
        <li><a href="#">Twiter</a></li>
      </ul>
      <span>© 2020 Misaaka. Proudly created by devankitkr</span>
    </div>
  );
};

export default Footer;
