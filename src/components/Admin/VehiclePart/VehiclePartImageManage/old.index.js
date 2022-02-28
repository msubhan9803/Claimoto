import React, { useState, useEffect, createRef } from "react";
import { msgAlert } from "functions";
import "./style.css";

const Index = ({
  imagesListLength,
  imagesList,
  editable,
  _handleImagesChange,
}) => {
  if (editable) {
    return (
      <LayoutEditable
        imagesList={imagesList}
        _handleImagesChange={_handleImagesChange}
        imagesList={imagesList}
      />
    );
  }

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

function LayoutEditable({ _handleImagesChange, imagesList }) {
  const imageRef = createRef();

  const _onImageChange = (event) => {
    let s_file = event.target.files[0];
    let selectedTypes = ["image/png", "image/jpg", "image/jpeg"];
    if (!selectedTypes.includes(s_file.type)) {
      msgAlert({
        title: "Invalid Image Type",
        text: "Only Png and Jpeg images are allowed",
      });
      imageRef.current.value = "";
    } else if (s_file.size < 20000) {
      msgAlert({
        title: "Invalid Image Size",
        text: "Only > 2 MB are allowed",
      });
      imageRef.current.value = "";
    } else {
      const reader = new FileReader();
      reader.onloadend = () => {
        let image_type = s_file.type.split("/")[1];
        _handleImagesChange({
          Base64: reader.result,
          Type: image_type,
          ImageName: s_file.name,
          file: s_file,
        });
      };
      reader.readAsDataURL(s_file);
    }
  };

  return (
    // <div className="row ltn__custom-gutter">
    //   <div className="col-lg-12 d-flex flex-row justify-content-center align-items-center">
    //     <FontIcon />
    //     <div className="ltnd__edit-table-logo">
    //       <img
    //         src={
    //           selected_image?.Base64 ||
    //           (typeof selected_image === "string" &&
    //             `${process.env.REACT_APP_API_ENVIROMENT}/${selected_image}`) ||
    //           Img
    //         }
    //         style={{ cursor: "pointer" }}
    //         onClick={() => {
    //           imageRef.current.click();
    //         }}
    //         alt="user_image"
    //       />
    //       <input
    //         type="file"
    //         ref={imageRef}
    //         style={{ display: "block" }}
    //         onChange={_onImageChange}
    //         name="attachment"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="row ltn__custom-gutter h-100">
      <input
        type="file"
        ref={imageRef}
        style={{ display: "none" }}
        onChange={_onImageChange}
        name="attachment"
      />
      <div
        className="col-lg-7 d-flex flex-row justify-content-center align-items-center pt-2 pb-2 cursor-pointer"
        onClick={() => {
          imageRef.current.click();
        }}
      >
        {imagesList[0] ? <Image img={imagesList[0]} /> : <UploadFontIcon />}
      </div>
      <div className="col-lg-5">
        <div className="row ltn__custom-gutter h-50">
          <div
            className="col-lg-12 d-flex flex-row justify-content-center align-items-center pt-2 pb-2 cursor-pointer"
            onClick={() => {
              imageRef.current.click();
            }}
          >
            {imagesList[1] ? <Image img={imagesList[0]} /> : <UploadFontIcon />}
          </div>
        </div>
        <div className="row ltn__custom-gutter h-50">
          <div
            className="col-lg-12 d-flex flex-row justify-content-center align-items-center pt-2 pb-2 cursor-pointer"
            onClick={() => {
              imageRef.current.click();
            }}
          >
            {imagesList[2] ? <Image img={imagesList[0]} /> : <UploadFontIcon />}
          </div>
        </div>
      </div>
    </div>
  );
}

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
          <div className="col-lg-12">
            <FontIcon />
          </div>
          <div className="col-lg-12">
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
        <i class="fa fa-5x fa-image"></i>
      </a>
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

export default Index;
