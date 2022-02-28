import React, { useState, useEffect, createRef } from "react";
import { msgAlert } from "functions";
import "./style.css";
import $ from 'jquery';
import lightcase from "lightcase";

const ImageGrid = ({ imagesListLength, imagesList }) => {
  if (imagesListLength == 1) {
    return <Layout1 imagesList={imagesList} />;
  }
  if (imagesListLength == 2) {
    return <Layout2 imagesList={imagesList} />;
  }
  if (imagesListLength == 3) {
    return <Layout3 imagesList={imagesList} />;
  }
  if (imagesListLength > 3) {
    return <LayoutGreaterThanThree imagesList={imagesList} />;
  }

  return <LayoutNull />;
};

function LayoutNull() {
  return (
    <div className="row ltn__custom-gutter">
      <div className="col-lg-12 d-flex flex-row justify-content-center align-items-center">
        <FontIcon />
        <p>No image</p>
      </div>
    </div>
  );
}

function Layout1({ imagesList }) {
  return (
    <div className="row ltn__custom-gutter">
      <div className="col-12">
        <Image img={imagesList[0]} />
      </div>
    </div>
  );
}

function Layout2({ imagesList }) {
  return (
    <div className="row ltn__custom-gutter">
      <div className="" style={{ width: "70%" }}>
        <Image img={imagesList[0]} />
      </div>
      <div className="" style={{ width: "30%" }}>
        <div className="row ltn__custom-gutter">
          <div className="col-lg-12">
            <Image img={imagesList[1]} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Layout3({ imagesList }) {
  return (
    <div className="row ltn__custom-gutter">
      <div className="" style={{ width: "70%" }}>
        <Image img={imagesList[0]} />
      </div>
      <div className="" style={{ width: "30%" }}>
        <div className="row ltn__custom-gutter image-grid-image-side">
          <Image img={imagesList[1]} />
        </div>
        <div className="row ltn__custom-gutter image-grid-image-side">
          <Image img={imagesList[2]} />
        </div>
      </div>
    </div>
  );
}

function LayoutGreaterThanThree({ imagesList }) {
  return (
    <div className="row ltn__custom-gutter">
      <div className="" style={{ width: "70%" }}>
        <div class="ltnd__img-gallery mt-15">
          <a data-rel="lightcase:myCollection">
            <img src={imagesList[0]} alt="Image" />
          </a>
        </div>
      </div>
      <div className="" style={{ width: "30%" }}>
        <div className="row ltn__custom-gutter image-grid-image-side">
          <Image img={imagesList[1]} />
        </div>
        <div className="row align-items-center text-center ltn__custom-gutter image-grid-image-side more-than-three">
          <h2 className="text-white fw-normal">+{imagesList.length - 2}</h2>
        </div>
      </div>
    </div>
  );
}

function Image({ img }) {
  return (
    <div className="ltnd__img-gallery">
      <img src={img} alt="Image" width="100%" />
    </div>
  );
}

function FontIcon({ img }) {
  return (
    <div className="ltnd__img-gallery">
      <i class="fa fa-5x fa-image"></i>
    </div>
  );
}

function UploadFontIcon({ img }) {
  return (
    <div className="ltnd__img-gallery upload-icon-mobile d-flex flex-row justify-content-center align-items-center text-muted  bg-light border border-dark rounded-3 w-100">
      <i class="fa fa-2x fa-upload"></i>
    </div>
  );
}

export default ImageGrid;
