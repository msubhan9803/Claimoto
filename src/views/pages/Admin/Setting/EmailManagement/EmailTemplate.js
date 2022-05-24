import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Garage_Icon from "assets/img/user-account.png";
import { Editor } from "react-draft-wysiwyg";
import htmlToDraft from "html-to-draftjs";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { TagsInput } from "react-tag-input-component";

const EmailTemplate = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [selected, setSelected] = useState([]);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div class="body-bg-1">
      <div class="ltnd__header-area ltnd__header-area-2 section-bg-2---">
        <div class="ltnd__header-middle-area mt-30">
          <div class="row">
            <div class="col-lg-9">
              <div class="ltnd__page-title-area">
                <h2>Email/Notification Template</h2>
                <p class="page-back-btn">
                  <Link to="/admin/settings">
                    <i className="icon-left-arrow-1" /> Back
                  </Link>
                </p>
              </div>
            </div>
            <div class="col-lg-3 align-self-center text-end">
              <div class="btn-wrapper btn-inline text-center mt-0 d-none">
                <a
                  href="#"
                  class="btn theme-btn-1 btn-round-12 btn-2"
                  title="Quick View"
                  data-bs-toggle="modal"
                  data-bs-target="#adding_modal"
                >
                  Edit
                </a>
              </div>
              <div class="ltnd__date-area d-none">
                <div class="ltn__datepicker">
                  <div class="ltn_datepicker-title">
                    <span>Date</span>
                  </div>
                  <div class="input-group date" data-provide="datepicker">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Select Date"
                    />
                    <div class="input-group-addon">
                      <i class="far fa-calendar-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="body-content-area-inner">
        <div class="ltnd__block-area">
          <div class="row">
            <div class="col-lg-12">
              <div class="ltnd__block-item mt-30">
                <div class="ltn__block-item-info">
                  <form id="#" action="#" method="#" class="ltnd__form-1">
                    <div class="row">
                      <div class="col-sm-12 col-md-6">
                        <div class="input-item">
                          <select class="nice-select">
                            <option>Event</option>
                            <option>Event 1 </option>
                            <option>Event 2 </option>
                            <option>Event 3 </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-6">
                        <div class="input-item">
                          <select class="nice-select">
                            <option>Send To</option>
                            <option>user 1 </option>
                            <option>user 2 </option>
                            <option>user 3 </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="input-item">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Enter Subject"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row pt-4 pb-4">
                      <h6>Email Signature</h6>
                      <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={onEditorStateChange}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="ltnd__footer-1 bg-white mt-80">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="ltnd__footer-1-inner">
                <div class="ltnd__left btn-normal"></div>
                <div class="ltnd__right btn-normal">
                  <div class="btn-wrapper">
                    <Link to="/admin/settings">
                      <i className="icon-left-arrow-1" /> Back
                    </Link>
                    <a href="#" class="btn theme-btn-1 btn-round-12">
                      Save
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EmailTemplate;
