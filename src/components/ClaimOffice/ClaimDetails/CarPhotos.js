import React, { useEffect, useState, useRef } from "react";
import EmptyPhoto from "../../../assets/img/icons/mc/png/18.png";
import { checkIfArrayHasEmptyValue, msgAlert } from "functions";
import Imageviewer from "../../Admin/General/ImageViewer";

export default function CarPhotos({
  type,
  claimDetails,
  photoTypeIdList,
  _handlePhotoPush,
  error,
}) {
  const ref = useRef();
  const [photoTypeState, setPhotoTypeState] = useState("");
  const { ClaimAccidentCarPhotos } = claimDetails;
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [imageViewerList, setImageViewerList] = useState([]);
  const [currenctImageIndex, setCurrenctImageIndex] = useState(0);

  useEffect(() => {
    if (
      ClaimAccidentCarPhotos &&
      !checkIfArrayHasEmptyValue(ClaimAccidentCarPhotos) &&
      ClaimAccidentCarPhotos.length > 0
    ) {
      let temp = [];
      for (let index = 0; index < ClaimAccidentCarPhotos.length; index++) {
        let path = ClaimAccidentCarPhotos[index].Path;
        path = process.env.REACT_APP_API_ENVIROMENT + path.substring(1, path.length)
        temp.push(path);
      }
      setImageViewerList(temp);
    }
  }, [ClaimAccidentCarPhotos]);

  const handleDocumentSave = (docType) => {
    setPhotoTypeState(docType);
    ref.current.click();
  };

  const _onImageChange = (event) => {
    let s_file = event.target.files[0];
    let selectedTypes = ["image/png", "image/jpg", "image/jpeg"];
    if (!selectedTypes?.includes(s_file.type)) {
      msgAlert({
        title: "Invalid Image Type",
        text: "Only Png and Jpeg images are allowed",
      });
      ref.current.value = "";
      return;
    } else if (s_file.size > 2000000) {
      msgAlert({
        title: "Invalid Image Size",
        text: "Only < 2 MB are allowed",
      });
      ref.current.value = "";
      return;
    }

    _handlePhotoPush(s_file, photoTypeState);
    ref.current.value = "";
  };

  const getPhotoTypeToHeading = (photoTypeString) => {
    if (photoTypeString === "Front") {
      return "Front";
    } else if (photoTypeString === "LeftRight") {
      return "Left Right";
    } else if (photoTypeString === "FrontLeft") {
      return "Front Left";
    } else if (photoTypeString === "FrontRight") {
      return "Front Right";
    } else if (photoTypeString === "RearLeft") {
      return "Rear Left";
    } else if (photoTypeString === "RearRight") {
      return "Rear Right";
    } else {
      return "Rear";
    }
  };

  const getPhotoUrl = (photoTypeString) => {
    let photoTypeId = photoTypeIdList[photoTypeString];
    for (let index = 0; index < ClaimAccidentCarPhotos?.length; index++) {
      const photo = ClaimAccidentCarPhotos[index];
      if (photo.ClaimPhotoTypeId === photoTypeId) {
        if (type === "view") {
          return photo.Path;
        } else if (type === "edit") {
          if (photo.file) {
            return photo.base64;
          } else {
            return "";
          }
        } else {
          if (photo.file) {
            return photo.base64;
          } else {
            return "";
          }
        }
      }
    }
  };

  const photoBlock = (photoTypeString) => {
    let image = getPhotoUrl(photoTypeString);
    if (image === "" || image == undefined) {
      return (
        <div class="col-lg-4">
          <div class="ltnd__car-photos-item-wrap">
            <p>
              <strong>{getPhotoTypeToHeading(photoTypeString)}</strong>
            </p>
            <div
              class="ltnd__car-photos-item cursor-pointer"
              onClick={() => handleDocumentSave(photoTypeString)}
            >
              <a>
                <img src={EmptyPhoto} alt="#" />
              </a>
              <p class="mb-0">
                Click to <strong>Browse</strong>
              </p>
              <small class="ltn__color-1">Support JPG, JPEG2000, PNG </small>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="col-lg-4">
          <div
            class="ltnd__car-photos-item-wrap cursor-pointer"
            onClick={() => type === "create" ? handleDocumentSave(photoTypeString) : _handleImageViewer(photoTypeString)}
          >
            <p>
              <strong>{getPhotoTypeToHeading(photoTypeString)}</strong>
            </p>
            <img
              src={
                type === "create"
                  ? image
                  : `${process.env.REACT_APP_API_ENVIROMENT}${image}`
              }
              alt="#"
              style={{ maxHeight: "180px", margin: "auto" }}
            />
          </div>
        </div>
      );
    }
  };

  const _handleImageViewer = (photoTypeString) => {
    let photoTypeId = photoTypeIdList[photoTypeString];
    let photoIndex = null;

    for (let index = 0; index < ClaimAccidentCarPhotos?.length; index++) {
      const photo = ClaimAccidentCarPhotos[index];
      if (photo.ClaimPhotoTypeId === photoTypeId) {
        photoIndex = index;
        break;
      }
    }

    setCurrenctImageIndex(photoIndex);
    setShowImageViewer(!showImageViewer);
  };

  const _handleImageViewerModalClose = () => {
    setShowImageViewer(!showImageViewer);
  };

  return (
    <>
      {imageViewerList.length > 0 && showImageViewer && (
        <Imageviewer
          src={imageViewerList}
          currentIndex={currenctImageIndex}
          onClose={_handleImageViewerModalClose}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 99999999999
          }}
          closeOnClickOutside={true}
        />
      )}

      <div class="ltnd__block-area mb-50">
        <div class="row">
          <div class="col-lg-12">
            <div class="ltnd__block-item mt-30">
              <div class="ltnd__title ltnd__title-2">
                <h4>Car photos</h4>
              </div>
              <div class="ltn__block-item-info ltnd__car-photos-wrap">
                <div class="row">
                  {ClaimAccidentCarPhotos &&
                  !checkIfArrayHasEmptyValue(ClaimAccidentCarPhotos)
                    ? Object.keys(photoTypeIdList).map((item, index) =>
                        photoBlock(item)
                      )
                    : ""}

                  <input
                    type="file"
                    id="file_2"
                    name="Image1"
                    style={{ display: "none" }}
                    onChange={_onImageChange}
                    ref={ref}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
