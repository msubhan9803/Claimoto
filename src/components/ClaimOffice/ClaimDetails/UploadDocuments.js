import React from "react";

export default function UploadDocuments({ type }) {
  return (
    <div class="ltnd__block-area">
      <div class="row">
        <div class="col-lg-12">
          <div class="ltnd__block-item mt-30">
            <div class="ltnd__space-between">
              <div class="ltnd__title ltnd__title-2">
                <h4>Uploaded documents</h4>
              </div>
              {/* <div class="btn-wrapper mt-0">
                <a href="#" class="ltn__secondary-color">
                  <strong>Add document +</strong>
                </a>
              </div> */}
            </div>
            <div class="ltn__block-item-info ltnd__policies-details-info">
              <div class="row">
                <div class="col-lg-12">
                  <div class="ltnd__space-between">
                    <div class="ltn__checkbox-radio-group inline">
                      <label class="ltn__checkbox">
                        <input type="checkbox" /> <i class="icon"></i>{" "}
                        <strong>Civil ID</strong>
                      </label>
                    </div>
                    <div class="btn-wrapper mt-0">
                      {
                        type == "view" && (
                          <a href="#" class="ltn__secondary-color--- ml-20">
                            <strong>
                              Download <i class="ti-arrow-circle-down"></i>
                            </strong>
                          </a>
                        )
                      }
                      <a href="#" class="ltn__secondary-color--- ml-20">
                        <strong>
                          Re-upload <i class="ti-arrow-circle-up"></i>
                        </strong>
                      </a>
                    </div>
                  </div>
                  <hr />
                </div>
                <div class="col-lg-12">
                  <div class="ltnd__space-between">
                    <div class="ltn__checkbox-radio-group inline">
                      <label class="ltn__checkbox">
                        <input type="checkbox" checked="" />{" "}
                        <i class="icon"></i> <strong>License</strong>
                      </label>
                    </div>
                    <div class="btn-wrapper mt-0">
                      {
                        type == "view" && (
                          <a href="#" class="ltn__secondary-color--- ml-20">
                            <strong>
                              Download <i class="ti-arrow-circle-down"></i>
                            </strong>
                          </a>
                        )
                      }
                      <a href="#" class="ltn__secondary-color--- ml-20">
                        <strong>
                          Re-upload <i class="ti-arrow-circle-up"></i>
                        </strong>
                      </a>
                    </div>
                  </div>
                  <hr />
                </div>
                <div class="col-lg-12">
                  <div class="ltnd__space-between">
                    <div class="ltn__checkbox-radio-group inline">
                      <label class="ltn__checkbox">
                        <input type="checkbox" checked="" />{" "}
                        <i class="icon"></i> <strong>Police certificate</strong>
                      </label>
                    </div>
                    <div class="btn-wrapper mt-0">
                      {
                        type == "view" && (
                          <a href="#" class="ltn__secondary-color--- ml-20">
                            <strong>
                              Download <i class="ti-arrow-circle-down"></i>
                            </strong>
                          </a>
                        )
                      }
                      <a href="#" class="ltn__secondary-color--- ml-20">
                        <strong>
                          Re-upload <i class="ti-arrow-circle-up"></i>
                        </strong>
                      </a>
                    </div>
                  </div>
                  <hr />
                </div>
                <div class="col-lg-12">
                  <div class="ltnd__space-between">
                    <div class="ltn__checkbox-radio-group inline">
                      <label class="ltn__checkbox">
                        <input type="checkbox" /> <i class="icon"></i>{" "}
                        <strong>Registration book</strong>
                      </label>
                    </div>
                    <div class="btn-wrapper mt-0">
                      {
                        type == "view" && (
                          <a href="#" class="ltn__secondary-color--- ml-20">
                            <strong>
                              Download <i class="ti-arrow-circle-down"></i>
                            </strong>
                          </a>
                        )
                      }
                      <a href="#" class="ltn__secondary-color--- ml-20">
                        <strong>
                          Re-upload <i class="ti-arrow-circle-up"></i>
                        </strong>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
