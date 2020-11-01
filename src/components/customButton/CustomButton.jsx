import React from "react";
import { Link } from "react-router-dom";
import "./CustomButton.css";
const CustomButton = ({ text, linkUrl }) => {
  return (
    <Link to={linkUrl}>
      <button className="custom-button">{text}</button>
    </Link>
  );
};

export default CustomButton;
