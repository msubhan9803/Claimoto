import React, { useEffect, useState, useRef } from "react";
import { ErrorMessage } from "@hookform/error-message";

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
    let temp = ClaimDocuments.find((doc) => doc.DocumentTypeId === docTypeId);

    if (temp) {
      if (temp.file || temp.Path) {
        return "Re-upload";
      }
    }
    return "Upload";
  };

  const _getCheckboxState = (docTypeString) => {
    let docTypeId = docType[docTypeString];
    let temp = ClaimDocuments.find((doc) => doc.DocumentTypeId === docTypeId);
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

  const documentRow = (docTypeString) => {
    return (
      <div class="col-lg-12">
        <div class="ltnd__space-between">
          <div class="ltn__checkbox-radio-group inline">
            <label class="ltn__checkbox">
              <input
                type="checkbox"
                checked={_getCheckboxState(docTypeString)}
              />{" "}
              <i class="icon"></i>{" "}
              <strong>{getDocTypeToHeading(docTypeString)}</strong>
            </label>
          </div>
          <div class="btn-wrapper mt-0">
            {type == "view" && (
              <a href="#" class="ltn__secondary-color--- ml-20">
                <strong>
                  Download <i class="ti-arrow-circle-down"></i>
                </strong>
              </a>
            )}
            <button
              href="#"
              class="ltn__secondary-color--- ml-20"
              onClick={() => handleDocumentSave(docTypeString)}
            >
              <strong>
                {_handleUploadBtnText(docTypeString)}{" "}
                <i class="ti-arrow-circle-up"></i>
              </strong>
            </button>
          </div>
        </div>
        <hr />
      </div>
    );
  };

  return (
    <div class="ltnd__block-area">
      <div class="row">
        <div class="col-lg-12">
          <div class="ltnd__block-item mt-30">
            <div class="ltnd__space-between">
              <div class="ltnd__title ltnd__title-2">
                <h4>Uploaded documents</h4>
              </div>
            </div>
            <div class="ltn__block-item-info ltnd__policies-details-info">
              <div class="row">
                {Object.keys(docType).map((item, index) => documentRow(item))}
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
