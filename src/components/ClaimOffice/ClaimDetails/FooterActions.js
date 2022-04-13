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
              <button type="submit" class="btn theme-btn-1 btn-round-12" ref={submitBtnRef}>
                Submitted
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
