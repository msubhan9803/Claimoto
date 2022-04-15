import React from "react";

export default function FooterActions({ type, submitBtnRef }) {
  return (
    <>
      {type === "create" || type === "edit" ? (
        <div class="ltnd__footer-1-inner bg-white">
          <div class="ltnd__left btn-normal">
            {/* <a href="#"><i class="ti-trash"></i> Delete</a> */}
          </div>
          <div class="ltnd__right btn-normal">
            <div class="btn-wrapper">
              {/* <a href="product.html"><i class="ti-angle-left"></i> Back</a> */}
              <a href="product.html"> Initial estimate</a>
              <button
                type="submit"
                class="btn theme-btn-1 btn-round-12"
                ref={submitBtnRef}
              >
                Submitted
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {type === "view" ? (
        <div class="ltnd__footer-1-inner bg-white">
          <div class="ltnd__left btn-normal">
            {/* <a href="#">
              <i class="ti-trash"></i> Delete
            </a> */}
          </div>
          <div class="ltnd__right btn-normal">
            <div class="btn-wrapper btn-list-inline">
              <ul>
                <li>
                  <a class="ltn__secondary-color--- ltn__color-9---" href="#">
                    <strong>History</strong>
                  </a>
                </li>
                <li class="ltnd__footer-btn-dropdown ltnd-dropdown">
                  <a class="toggle">
                    <strong>Contact</strong>
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  <div class="ltnd__footer-btn-dropdown-menu ltnd-dropdown-menu">
                    <ul>
                      <li>
                        <a href="tel:+123456789">Call</a>
                      </li>
                      <li>
                        <a href="#">leave a message</a>
                      </li>
                      <li>
                        <a href="#">Schedule a call</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a class="ltn__secondary-color--- ltn__color-9---" href="#">
                    <strong>Assign to garage/agency</strong>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="btn theme-btn-1--- btn-round-12 btn-danger"
                  >
                    Reject
                  </a>
                </li>
                <li>
                  <a href="#" class="btn theme-btn-1 btn-round-12">
                    Approve
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
