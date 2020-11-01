import React from "react";
import { Link } from "react-router-dom";
import CollectionFirstPreview from "../components/collection-first-preview/CollectionFirstPreview";

import "./Products.css";

const Products = () => {
  return (
    <div className="main m-4 p-4 ">
      <div className="product-container">
        <div className="collection-title">
          <Link
            to="/products/firstcollection"
            style={{ textDecoration: "none" }}
          >
            <span>Collection 1</span>
          </Link>
        </div>
        <CollectionFirstPreview />

        {/* COLLECTION 2 */}
        <div className="collection-title">
          <Link
            // to="/products/firstcollection"
            style={{ textDecoration: "none" }}
          >
            <span>Collection 2</span>
          </Link>
        </div>
        <span className="collection-container"><p>Coming soon...</p></span>

        {/* COLLECTION 3*/}
        <div className="collection-title">
          <Link
            // to="/products/firstcollection"
            style={{ textDecoration: "none" }}
          >
            <span>Collection 3</span>
          </Link>
        </div>
        <span className="collection-container"><p>Coming soon...</p></span>
      </div>
    </div>
  );
};

export default Products;
