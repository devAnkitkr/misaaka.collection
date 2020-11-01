import React from "react";

import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="main">
      <div className="media-container-row">
        <div className="col-12 col-md-8" style={{ margin: "1em auto" }}>
          <div className="section-head text-center space30">
            <h1 className="mbr-section-title pb-5 mbr-fonts-style">
              FAQ
            </h1>
          </div>
          <div className="clearfix"></div>
          <div
            id="bootstrap-accordion_475"
            className="panel-group accordionStyles accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div className="card">
              <div className="card-header" role="tab" id="headingOne">
                <a
                  role="button"
                  className="panel-title collapsed text-black"
                  data-toggle="collapse"
                  data-parent="#bootstrap-accordion_475"
                  data-core=""
                  href="#collapse1_475"
                  aria-expanded="false"
                  aria-controls="collapse1"
                >
                  <h4 className="mbr-fonts-style">
                    <span className="sign mbr-iconfont mbri-arrow-down inactive"></span>
                    What is Misaaka.Collection?
                  </h4>
                </a>
              </div>
              <div
                id="collapse1_475"
                className="panel-collapse noScroll collapse "
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="panel-body p-4">
                  <p className="mbr-fonts-style panel-text display-7">
                    Misaaka is an online store of handcrafted crockeries and
                    home decore items made by Indian artisans.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="headingTwo">
                <a
                  role="button"
                  className="collapsed panel-title text-black"
                  data-toggle="collapse"
                  data-parent="#bootstrap-accordion_475"
                  data-core=""
                  href="#collapse2_475"
                  aria-expanded="false"
                  aria-controls="collapse2"
                >
                  <h4 className="mbr-fonts-style">
                    <span className="sign mbr-iconfont mbri-arrow-down inactive"></span>{" "}
                    Is it deliverable to any location?
                  </h4>
                </a>
              </div>
              <div
                id="collapse2_475"
                className="panel-collapse noScroll collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="panel-body p-4">
                  <p className="mbr-fonts-style panel-text display-7">
                    We deliver pan India.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="headingThree">
                <a
                  role="button"
                  className="text-black panel-title collapsed"
                  data-toggle="collapse"
                  data-parent="#bootstrap-accordion_475"
                  data-core=""
                  href="#collapse3_475"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  <h4 className="mbr-fonts-style">
                    <span className="sign mbr-iconfont inactive mbri-arrow-down"></span>{" "}
                    Is there a return policy?
                  </h4>
                </a>
              </div>
              <div
                id="collapse3_475"
                className="panel-collapse noScroll collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div className="panel-body p-4">
                  <p className="mbr-fonts-style panel-text display-7">
                    Yes , You can return our product within 10 days and The
                    product in your order will be replaced with an identical
                    product in case it is damaged (broken or spoiled) or
                    defective (has a functional problem that causes it not to
                    work).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
