import React, { useState, useEffect } from "react";
import { ProductList } from "../products";
import CustomButton from "../components/customButton/CustomButton";

import "./CollectionOverview.css";
import { withRouter } from "react-router-dom";

const CollectionOverview = (props) => {
  const [collectionTitle, setcollectionTitle] = useState("");
  useEffect(() => {
    if (props.match.params.collectionId == "firstcollection") {
      setcollectionTitle("Collection One");
    } else {
      setcollectionTitle("");
    }
  }, [props.match.params.collectionId]);
  return (
    <div className="main">
      <div className="collection-header">
        <h1>{collectionTitle}</h1>
      </div>
      <div class="collection-overview">
        {ProductList.map((item, index) => (
          <div
            className="card m-2"
            style={{ width: "20rem" }}
            onClick={() => {
              props.history.push(`/products/collection/${index + 1}`);
            }}
          >
            <img
              className="card-img-top"
              src={item.image1}
              alt=""
              style={{
                maxWidth: "100%,",
                height: "250px",
                objectFit: "cover",
              }}
            />
            <p className="card-title">{item.title}</p>
            {/* <span className="card-body">{item.description}</span> */}
            {/* <CustomButton
              text={"Know more"}
              linkUrl={`/products/collection/${item.id}`}
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionOverview);
