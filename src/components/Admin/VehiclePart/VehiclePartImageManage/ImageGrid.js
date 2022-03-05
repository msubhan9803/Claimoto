import React, { useState, useEffect, createRef } from "react";
import { msgAlert } from "functions";
import "./style.css";
import Imageviewer from "../../General/ImageViewer.js";

const ImageGrid = ({ imagesListLength, imagesList }) => {
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [imageViewerList, setImageViewerList] = useState([]);
  const [currenctImageIndex, setCurrenctImageIndex] = useState(0);

  useEffect(() => {
    if (imagesList.length > 0) {
      let temp = [];
      for (let index = 0; index < imagesList.length; index++) {
        const image = imagesList[index];
        temp.push(image);
      }
      setImageViewerList(temp);
    }
  }, [imagesList]);

  const _handleImageViewer = (index) => {
    setCurrenctImageIndex(index);
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
          }}
          closeOnClickOutside={true}
        />
      )}
      <Layout
        imagesList={imagesList}
        _handleImageViewer={_handleImageViewer}
        length={imagesListLength}
      />
      {!imagesListLength || (imagesListLength == 0 && <LayoutNull />)}
    </>
  );
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

function Layout({ imagesList, _handleImageViewer, length }) {
  return (
    <>
      <div className="image-grid-layout-web h-100">
        <div className="row ltn__custom-gutter h-100">
          <div className="col-md-12 col-lg-8">
            <Image
              img={imagesList[0]}
              index={0}
              _handleImageViewer={_handleImageViewer}
            />
          </div>
          {length > 1 && (
            <div className="col-md-12 col-lg-4">
              <div className="row ltn__custom-gutter image-grid-image-side pb-1">
                <div className="col-12">
                  <Image
                    img={imagesList[1]}
                    index={1}
                    _handleImageViewer={_handleImageViewer}
                  />
                </div>
              </div>

              {length > 2 && (
                <div className="row align-items-center text-center ltn__custom-gutter image-grid-image-side pt-1">
                  {length > 3 ? (
                    <div className="col-12 h-100 w-100">
                      <div className="ltnd__img-gallery image-gallery-left-side-image-wrapper h-100 w-100">
                        <div
                          className="d-flex flex-row justify-content-center cursor-pointer more-than-three text-center"
                          onClick={() => _handleImageViewer(0)}
                        >
                          <h2 className="text-white text-center fw-normal m-0">
                            +{imagesList.length - 2}
                          </h2>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="col-12 h-100 w-100">
                      <div className="ltnd__img-gallery image-gallery-left-side-image-wrapper h-100 w-100">
                        <Image
                          img={imagesList[2]}
                          index={2}
                          _handleImageViewer={_handleImageViewer}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="row ltn__custom-gutter h-100 image-grid-layout-mobile">
        <div className="col-12 h-100">
          <Image
            img={imagesList[0]}
            index={0}
            _handleImageViewer={_handleImageViewer}
          />
          <a onClick={() => _handleImageViewer(0)}>Click here to view more</a>
        </div>
      </div>
    </>
  );
}

function Image({ img, _handleImageViewer, index }) {
  return (
    <div
      className="ltnd__img-gallery image-gallery-left-side-image-wrapper h-100 w-100"
      // onClick={() => _handleImageViewer(index)}
    >
      <img src={img} alt="Image" onClick={() => _handleImageViewer(index)} />
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
