import React from "react";

import UserImg from "../../assets/userlogo.png"

import "./feedback.css";

const Feedback = () => {
  return (
    <div className="feedback">
      <h1>User reviews</h1>
      <div className="feedback-row">
        <div className="card">
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              doloremque libero accusantium repudiandae ratione quis quos iure
              commodi quam! Nemo laudantium quod, iure sit corporis ullam fugit
              numquam sequi repudiandae.
            </p>
          </div>
          <div className="user-info">
            <img className="feedback-img" src={UserImg} alt="" width="50px" />
            <div>
              <h3>Satyam</h3>
              <p>New Editor</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              doloremque libero accusantium repudiandae ratione quis quos iure
              commodi quam! Nemo laudantium quod, iure sit corporis ullam fugit
              numquam sequi repudiandae.
            </p>
          </div>
          <div className="user-info">
            <img className="feedback-img" src={UserImg} alt="" width="50px" />
            <div>
              <h3>Satyam</h3>
              <p>New Editor</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              doloremque libero accusantium repudiandae ratione quis quos iure
              commodi quam! Nemo laudantium quod, iure sit corporis ullam fugit
              numquam sequi repudiandae.
            </p>
          </div>
          <div className="user-info">
            <img className="feedback-img" src={UserImg} alt="" width="50px" />
            <div>
              <h3>Satyam</h3>
              <p>New Editor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
