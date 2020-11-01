import React from "react";
import { Parallax } from "react-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  fas,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../components/customButton/CustomButton";
import InstaFeed from "../components/instafeed/Instafeed";
import Feedback from "../components/feedback/feedback.jsx";

import HeroImage1 from "../assets/_DSC0101.JPG";
import HeroImage2 from "../assets/DSC_0712.JPG";
import HeroImage3 from "../assets/DSC_0884.JPG";
import MisaakaLogo from "../assets/MISAAKA LOGO3.svg";
import BittuPic from "../assets/Screenshot_20200918_191851_com.instagram.android.JPG";
import TeaPot from "../assets/pot.png";
import pottery from "../assets/pottery.png";
import delivery from "../assets/delivery.png";
import payment from "../assets/payment.png";

import "./Home.css";

const inlineStyle = {
  width: "auto",
  color: "white",
  position: "absolute",
  top: "45%",
  left: "52%",
  transform: "translate(-50%,-50%)",
  fontFamily: "'Open Sans Condensed', sans-serif",
  fontSize: "40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const Home = () => {
  return (
    <div className="main">
      <Parallax bgImage={HeroImage2} style={{ margin: "0" }} strength={500}>
        <div
          className="background-overlay"
          style={{ height: "100vh", padding: "80px" }}
        >
          <div style={inlineStyle}>
            <div className="logo d-flex flex-column">
              <img
                className="logo-img m-2 p-2"
                src={MisaakaLogo}
                alt=""
                width="100px"
              />
              <span className="hero-text bg-custom p-2">
                Welcome to Misaaka Collection<br></br>
              </span>
              <span className="sub-hero-text">
                come see <br></br> what you love
              </span>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="philosophy">
        <img className="m-2" src={TeaPot} alt="tea-pot" width="80px" />
        <div className="d-flex">
          <FontAwesomeIcon icon={faQuoteLeft} size="1x" />
          <p className="m-2">
            Turn your home into a work of art with handcrafted crockeries and
            home decor items.
          </p>
          <FontAwesomeIcon icon={faQuoteRight} size="1x" />
        </div>
      </div>
      <Parallax bgImage={HeroImage1} strength={500}>
        <div className="center-row" style={{ width: "100%", height: "92vh" }}>
          <div className="about-me-card">
            <img src={BittuPic} alt="bittu-img" width="300px" />
            <div className="about-me-body">
              <p style={{fontSize:"18px"}}>
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  size="sm"
                  style={{ margin: "0 8px" }}
                />
                I found my soul, my happiness, my subject of interest in the
                form of this tiny circular logo named 'MISAAKA'.
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  size="sm"
                  style={{ margin: "0 4px" }}
                />
              </p>
              <h3>Akansha Niranjan</h3>
              <p>Owner of Misaaka Collection</p>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="features">
        <div className="card shadow text-center p-2">
          <div className="card-body">
            <img src={pottery} alt="" width="80px" />
            <h4 className="card-title">Handcrafted crockeries</h4>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
        </div>
        <div className="card shadow text-center p-2">
          <div className="card-body">
            <img src={delivery} alt="" width="80px" />
            <h4 className="card-title">Quick Delivery</h4>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
        </div>
        <div className="card shadow text-center p-2">
          <div className="card-body">
            <img src={payment} alt="" width="80px" />
            <h4 className="card-title">Hassle-free Payment</h4>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
        </div>
      </div>
      <div className="insta-feed-hero" style={{ height: "auto", padding: "0" }}>
        <InstaFeed />
      </div>
      <Feedback />
    </div>
  );
};

export default Home;
