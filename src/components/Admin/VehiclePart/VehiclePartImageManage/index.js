import React, { useState, useEffect, createRef } from "react";
import { msgAlert } from "functions";
import "./style.css";

const VehiclePartImageManage = ({
  imagesListLength,
  imagesList,
  editable,
  _handleImagesPushChange,
  _handleImagesDeleteChange,
}) => {
  const imageRef = createRef();

  const _onImageChange = (event) => {
    _parseFilesinBase64(event.target.files);
  };

  const _parseFilesinBase64 = (filesList) => {
    let files = filesList;
    delete files.length;

    for (let index = 0; index < Object.keys(files).length; index++) {
      const fileIndex = Object.keys(files)[index];
      let s_file = files[fileIndex];
      let selectedTypes = ["image/png", "image/jpg", "image/jpeg"];

      if (!selectedTypes.includes(s_file.type)) {
        msgAlert({
          title: "Invalid Image Type",
          text: "Only Png and Jpeg images are allowed",
        });
        imageRef.current.value = "";
        return;
      } else if (s_file.size > 2000000) {
        msgAlert({
          title: "Invalid Image Size",
          text: "Only < 2 MB are allowed",
        });
        imageRef.current.value = "";
        break;
      } else {
        const reader = new FileReader();
        reader.onloadend = () => {
          let image_type = s_file.type.split("/")[1];
          //   _handleImagesPushChange({
          //     Base64: reader.result,
          //     Type: image_type,
          //     ImageName: s_file.name,
          //     file: s_file,
          //   });
          _handleImagesPushChange(reader.result);
        };
        reader.readAsDataURL(s_file);
      }
    }
  };

  //   if (editable) {
  return (
    <div className="row ltn__custom-gutter h-100">
      <input
        type="file"
        ref={imageRef}
        style={{ display: "none" }}
        onChange={_onImageChange}
        multiple
        name="attachment"
      />

      {imagesList.length === 0 && (
        <div
          className="col-12 d-flex flex-row justify-content-center align-items-center pt-2 pb-2 cursor-pointer"
          onClick={() => {
            imageRef.current.click();
          }}
        >
          <UploadFontIcon />
        </div>
      )}

      {imagesList.length > 0 && (
        <div className="col-12">
          <div className="row images-dropzone">
            {imagesList.map((item, index) => (
              <div className="col-sm-12 col-md-4">
                <Image
                  img={item}
                  index={index}
                  _handleImagesDeleteChange={_handleImagesDeleteChange}
                />
              </div>
            ))}
            <div
              className="col-sm-12 col-md-4"
              onClick={() => {
                imageRef.current.click();
              }}
            >
              <PlusFontIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
  //   }
};

function PlusFontIcon() {
  return (
    <div className="ltnd__img-gallery d-flex flex-row justify-content-center align-items-center text-muted  bg-light border rounded-4 image-add-icon">
      <i class="fa fa-2x fa-circle-plus"></i>
    </div>
  );
}

function UploadFontIcon() {
  return (
    <div className="ltnd__img-gallery upload-icon-mobile d-flex flex-column justify-content-center align-items-center text-muted  bg-light border border rounded-4 w-100">
      <i class="fa fa-2x fa-upload"></i>
      <p>Click to upload images</p>
    </div>
  );
}

function Image({ img, index, _handleImagesDeleteChange }) {
  return (
    <div className="uploaded-image">
      <img src={img} width="100" height="100" />
      <i
        class="fa fa-1x fa-circle-xmark"
        onClick={() => _handleImagesDeleteChange(index)}
      ></i>
    </div>
  );
}

export default VehiclePartImageManage;
