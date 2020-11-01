import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialLinks.css";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <div>
      <ul className="social-list">
        <a href="https://www.facebook.com/misaaka.collection" target="_blank">
          <li>
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="2x"
              style={{ color: "royalblue" }}
            />
          </li>
        </a>
        <a href="https://www.instagram.com/misaaka.collection/" target="_blank">
          <li>
            <FontAwesomeIcon
              icon={faInstagramSquare}
              size="2x"
              style={{ color: "red" }}
            />
          </li>
        </a>
        <li>
          <FontAwesomeIcon
            icon={faTwitterSquare}
            size="2x"
            style={{ color: "#1DA1F2" }}
          />
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
