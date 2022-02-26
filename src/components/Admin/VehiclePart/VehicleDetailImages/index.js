import React, { useState, useEffect } from "react";

const Index = ({ imagesListLength, imagesList }) => {

  if (imagesListLength == 1) {
    return <Layout1 imagesList={imagesList} />;
  }
  if (imagesListLength == 2) {
    return <Layout2 imagesList={imagesList} />;
  }
  if (imagesListLength == 3) {
    return <Layout3 imagesList={imagesList} />;
  }

  return <LayoutNull />;
};

function LayoutNull() {
  return (
    <div className="row ltn__custom-gutter">
      <div className="col-lg-7 d-flex flex-row justify-content-center align-items-center">
        <FontIcon />
      </div>
      <div className="col-lg-5">
        <div className="row ltn__custom-gutter">
          <div className="col-lg-12 d-flex flex-row justify-content-center align-items-center">
            <FontIcon />
          </div>
          <div className="col-lg-12 d-flex flex-row justify-content-center align-items-center">
            <FontIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

function Layout1({ imagesList }) {
  return (
    <div className="row ltn__custom-gutter">
      <div className="col-lg-7">
        <Image img={imagesList[0]} />
      </div>
      <div className="col-lg-5">
        <div className="row ltn__custom-gutter">
          <div className="col-lg-12 d-flex flex-row justify-content-center align-items-center">
            <FontIcon />
          </div>
          <div className="col-lg-12 d-flex flex-row justify-content-center align-items-center">
            <FontIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

function Layout2({ imagesList }) {
  return (
    <div className="row ltn__custom-gutter">
      <div className="col-lg-7">
        <Image img={imagesList[0]} />
      </div>
      <div className="col-lg-5">
        <div className="row ltn__custom-gutter">
          <div className="col-lg-12">
            <Image img={imagesList[1]} />
          </div>
          <div className="col-lg-12 d-flex flex-row justify-content-center align-items-center">
            <FontIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

function Layout3({ imagesList }) {
  return (
    <div className="row ltn__custom-gutter">
      <div className="col-lg-7">
        <Image img={imagesList[0]} />
      </div>
      <div className="col-lg-5">
        <div className="row ltn__custom-gutter">
          <div className="col-lg-12">
            <Image img={imagesList[1]} />
          </div>
          <div className="col-lg-12">
            <Image img={imagesList[2]} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Image({ img }) {
  return (
    <div className="ltnd__img-gallery mt-15">
      <a href="img/motor/vehicle/11.png" data-rel="lightcase:myCollection">
        <img src={img} alt="Image" />
      </a>
    </div>
  );
}

function FontIcon({ img }) {
  return (
    <div className="ltnd__img-gallery mt-15">
      <a href="img/motor/vehicle/11.png" data-rel="lightcase:myCollection">
        <i class="fa fa-3x fa-image"></i>
      </a>
    </div>
  );
}

export default Index;
