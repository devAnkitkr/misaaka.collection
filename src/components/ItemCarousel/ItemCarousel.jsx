import React from "react";

import "./ItemCarousel.css";
const ItemCarousel = ({ images }) => {
  return (
    <div className="carousel-container">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
        style={{ backgroundColor: "black" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={images[0]} alt="..." />
          </div>
          <div className="carousel-item">
            <img src={images[1]} alt="..." />
          </div>
          <div className="carousel-item">
            <img src={images[2]} alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default ItemCarousel;
