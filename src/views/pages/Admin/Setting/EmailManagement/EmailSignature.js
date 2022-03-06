import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import Garage_Icon from "assets/img/user-account.png";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { TagsInput } from "react-tag-input-component";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import {
  GetEmailConfig,
  UpdateEmailPart,
  HandleEmailValues,
} from "../../../../../store/actions/settings/index.js";

const schema = Yup.object().shape({
  EmailCC: Yup.array().required("Email CC is required"),
  EmailBCC: Yup.array().required("Email BCC is required"),
  Email_Signature: Yup.string().required("Email Signature is required"),
});

const defaultValues = {
  GlobalEmail_ID: 0,
  EmailCC: [],
  EmailBCC: [],
  Email_Signature: "",
};

const EmailSignature = () => {
  let dispatch = useDispatch();
  const navigateHook = useNavigate();
  const { timezoneList, emailSigValues, navigateEmailSig } = useSelector(
    (state) => state.settingsReducer
  );
  const { GlobalEmail_ID, EmailCC, EmailBCC, Email_Signature } = emailSigValues;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    setValue,
  } = useForm({
    mode: "all",
    defaultValues,
    // resolver: yupResolver(schema),
  });

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    dispatch(GetEmailConfig());

    return () => {
      dispatch({
        type: "NAVIGATE_SMTP_BACK",
        payload: false,
      });
      reset(defaultValues);
    };
  }, []);

  useEffect(() => {
    if (Email_Signature !== "") {
      const html = Email_Signature;
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        const editorState = EditorState.createWithContent(contentState);
        setEditorState(editorState);
      }
    }
  }, [Email_Signature]);

  useEffect(() => {
    if (navigateEmailSig) {
      // navigateHook("/admin/settings");
      window.location.href = "/admin/settings";
    }
  }, [navigateEmailSig]);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const _handleChangeValue = (e) => {
    e.persist();
    console.log("value: ", e.target.value);
    let name = e.target.name;
    let value = e.target.value;
    dispatch(HandleEmailValues(name, value));
  };

  const _handleCCBCCChangeValue = (e, name) => {
    let value = e;
    dispatch(HandleEmailValues(name, value));
  };

  const _onSubmit = (data) => {
    console.log("editorState: ", editorState);
    let payload = emailSigValues;
    payload.Email_Signature = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    dispatch(UpdateEmailPart(emailSigValues));
  };

  return (
    <>
      {!GlobalEmail_ID ? (
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div class="body-bg-1">
          <form is="email-form" onSubmit={handleSubmit(_onSubmit)}>
            <div class="ltnd__header-area ltnd__header-area-2 section-bg-2---">
              <div class="ltnd__header-middle-area mt-30">
                <div class="row">
                  <div class="col-lg-9">
                    <div class="ltnd__page-title-area">
                      <h2>Email Signature</h2>
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
                            <div class="col-12 pt-2 pb-2">
                              <h6>Email CC</h6>
                              <div class="input-item">
                                <TagsInput
                                  name="EmailCC"
                                  value={EmailCC}
                                  {...register("EmailCC")}
                                  onChange={(e) =>
                                    _handleCCBCCChangeValue(e, "EmailCC")
                                  }
                                  placeholder="Enter Email CC"
                                />
                                <ErrorMessage
                                  errors={errors}
                                  name="EmailCC"
                                  render={({ message }) => (
                                    <p
                                      style={{
                                        color: "red",
                                        paddingTop: "20px",
                                      }}
                                    >
                                      {message}
                                    </p>
                                  )}
                                />
                              </div>
                            </div>
                            <div class="col-12 pt-2 pb-2">
                              <h6>Email BCC</h6>
                              <div class="input-item">
                                <TagsInput
                                  name="EmailBCC"
                                  value={EmailBCC}
                                  {...register("EmailBCC")}
                                  onChange={(e) =>
                                    _handleCCBCCChangeValue(e, "EmailBCC")
                                  }
                                  placeholder="Enter Email BCC"
                                />
                                <ErrorMessage
                                  errors={errors}
                                  name="EmailBCC"
                                  render={({ message }) => (
                                    <p
                                      style={{
                                        color: "red",
                                        paddingTop: "20px",
                                      }}
                                    >
                                      {message}
                                    </p>
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row pt-2 pb-2">
                            <h6>Email Signature</h6>
                            <Editor
                              editorState={editorState}
                              toolbarClassName="toolbarClassName"
                              wrapperClassName="wrapperClassName"
                              editorClassName="editorClassName"
                              onEditorStateChange={onEditorStateChange}
                            />
                            <ErrorMessage
                              errors={errors}
                              name="Email_Signature"
                              render={({ message }) => (
                                <p style={{ color: "red", paddingTop: "20px" }}>
                                  {message}
                                </p>
                              )}
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
                          <button
                            type="submit"
                            class="btn theme-btn-1 btn-round-12"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </form>
        </div>
      )}
    </>
  );
};

export default EmailSignature;
