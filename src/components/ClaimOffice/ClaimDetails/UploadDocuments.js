import React, { useEffect, useState, useRef } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { checkIfArrayHasEmptyValue } from "functions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function UploadDocuments({
  type,
  claimDetails,
  _handleDocumentPush,
  docType,
  error,
}) {
  const ref = useRef();
  const { ClaimDocuments } = claimDetails;
  const [docTypeState, setDocTypeState] = useState("");

  const handleDocumentSave = (docType) => {
    setDocTypeState(docType);
    ref.current.click();
  };

  const _onImageChange = (event) => {
    let s_file = event.target.files[0];
    console.log("s_file", s_file);
    console.log("docTypeState: ", docTypeState);

    _handleDocumentPush(s_file, docTypeState);
    ref.current.value = "";
  };

  const _handleUploadBtnText = (docTypeString) => {
    let docTypeId = docType[docTypeString];
    let temp = ClaimDocuments?.find((doc) => doc.DocumentTypeId === docTypeId);

    if (temp) {
      if (temp.file || temp.Path || temp.AlreadyAddedPath) {
        return "Re-Upload";
      }
    }
    return "Upload";
  };

  const _getCheckboxState = (docTypeString) => {
    let docTypeId = docType[docTypeString];
    let temp = ClaimDocuments?.find((doc) => doc.DocumentTypeId === docTypeId);
    if (temp) {
      return true;
    } else {
      return false;
    }
  };

  const getDocTypeToHeading = (docTypeString) => {
    if (docTypeString === "Civil_ID") {
      return "Civil ID";
    } else if (docTypeString === "License") {
      return "License";
    } else if (docTypeString === "Police_Certificate") {
      return "Police certificate";
    } else {
      return "Registration book";
    }
  };

  const getFileUrl = (docTypeString) => {
    let docTypeId = docType[docTypeString];
    let temp = ClaimDocuments?.find((doc) => doc.DocumentTypeId === docTypeId);
    let s = temp.Path;
    return s.substring(1, s.length);
  };

  const downloadFIle = (docTypeString) => {
    let link = process.env.REACT_APP_API_ENVIRONMENT + getFileUrl(docTypeString);
    var element = document.createElement("a");
    element.setAttribute("href", link);
    element.setAttribute("target", "_blank");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const documentRow = (docTypeString) => {
    return (
      <>
        <div className="col-lg-12">
          <div className="ltnd__space-between">
            <div className="ltn__checkbox-radio-group inline">
              <label className="ltn__checkbox">
                <input
                  type="checkbox"
                  checked={_getCheckboxState(docTypeString)}
                />{" "}
                <div className="icon">
                  <FontAwesomeIcon icon={faCheck} color="white" />
                </div>
                <strong style={{ marginLeft: "8px" }}>{getDocTypeToHeading(docTypeString)}</strong>
              </label>
            </div>
            <div className="btn-wrapper mt-0">
              {type === "view" && (
                <a
                  className="ltn__secondary-color--- ml-20 cursor-pointer"
                  onClick={() => downloadFIle(docTypeString)}
                >
                  <strong>
                    Download <i className="ti-arrow-circle-down"></i>
                  </strong>
                </a>
              )}
              <a
                className="ltn__secondary-color--- ml-20 cursor-pointer"
                onClick={() => handleDocumentSave(docTypeString)}
              >
                <strong>
                  {_handleUploadBtnText(docTypeString)}{" "}
                  <i className="ti-arrow-circle-up"></i>
                </strong>
              </a>
            </div>
          </div>
        </div>
        <hr />
      </>
    );
  };

  return (
    <div className="ltnd__block-area">
      <div className="row">
        <div className="col-lg-12">
          <div className="ltnd__block-item mt-30">
            <div className="ltnd__space-between">
              <div className="ltnd__title ltnd__title-2">
                <h4>Documents</h4>
              </div>
            </div>
            <div className="ltn__block-item-info ltnd__policies-details-info">
              <div className="row">
                {ClaimDocuments && !checkIfArrayHasEmptyValue(ClaimDocuments)
                  ? Object.keys(docType).map((item, index) => documentRow(item))
                  : ""}
              </div>

              <input
                type="file"
                id="file_2"
                name="Image1"
                style={{ display: "none" }}
                onChange={_onImageChange}
                ref={ref}
              />

              {error !== "" && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
