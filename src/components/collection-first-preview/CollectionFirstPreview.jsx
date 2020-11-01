import React from "react";
import { withRouter } from "react-router-dom";
import { ProductList } from "../../products";
import CustomButton from "../customButton/CustomButton";

import "./CollectionFirstPreview.css";

const CollectionFirstPreview = (props) => {
  console.log("history",props)
  return (
    <div class="collection-container" onClick={()=>props.history.push('/products/firstcollection')}>
      {ProductList.map(
        (item, index) =>
          index <= 2 && (
            <div className="card m-2" style={{ width: "20rem" }}>
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
            </div>
          )
      )}
    </div>
  );
};

export default withRouter(CollectionFirstPreview);
