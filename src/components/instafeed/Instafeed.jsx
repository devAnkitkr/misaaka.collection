import React from "react";
import Feed from "react-instagram-authless-feed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import MisaakaLogo from "../../assets/MISAAKA LOGO3.svg";

import "./Instafeed.css";

const Instafeed = () => {
  return (
    <div className="insta-feed">
      <div className="instagram-header">
        <div className="instagram-container">
          <img src={MisaakaLogo} alt="misaaka-logo" width="50px" />
          <div>
            <span className="p-1 text-dark">@misaaka.collection</span>
          </div>
          <a
            href="https://www.instagram.com/misaaka.collection/"
            target="blank"
          >
            <button type="button" className="btn btn-primary button-padding">
              Follow
            </button>
          </a>
        </div>
        <div className="loved-by">
          Loved by <b>1000+</b> users on
          <FontAwesomeIcon
            icon={faInstagramSquare}
            size="1x"
            className="insta-logo"
          />
          Instagram
        </div>
      </div>

      <div>
        <Feed
          userName="misaaka.collection"
          className="Feed"
          classNameLoading="Loading"
          limit="12"
        />
      </div>
    </div>
  );
};

export default Instafeed;
