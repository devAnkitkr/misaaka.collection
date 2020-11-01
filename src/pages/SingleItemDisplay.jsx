import React from "react";
import { ProductList } from "../products";
import ItemCarousel from "../components/ItemCarousel/ItemCarousel";
import "whatsapp-button/whatsapp-button.js";

import "./SingleItemDisplay.css";

const SingleItemDisplay = (prop) => {
  console.log("prop101", prop);
  return (
    <div className="main">
      {ProductList.map(
        (item) =>
          item.id == prop.match.params.itemId && (
            <div className="item-container">
              <div className="item-images" style={{width:"100%"}}>
                <ItemCarousel
                  images={[item.image1, item.image2, item.image3]}
                />
              </div>
              <div className="item-body">
                <div className="item-title">
                  <h1>{item.title}</h1>
                </div>
                <div className="item-description">{item.description}</div>
                <div className="item-contact">
                  <whatsapp-button
                    phone="9599719228"
                    dialcode="91"
                    text={`hey i would like to know the details of ${item.title}`}
                    label="Start Chat"
                  ></whatsapp-button>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default SingleItemDisplay;
