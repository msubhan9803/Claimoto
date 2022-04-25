import React, { useEffect, createRef } from 'react'
import Modal from 'react-modal';
import { Animated } from "react-animated-css";
import { modalStyleCenterStatus } from 'variables/modalCSS';
import { useDispatch, useSelector } from 'react-redux';
import makeAnimated from 'react-select/animated';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getAllowActions, capitalizeFirstLetter } from 'functions';
import { getRejectionReasons, handleChangeInputStatus, initialHandleClaim } from 'store/actions/claims';
import { successAlert } from 'functions';
import { GetClaimActionsByRoleId } from 'store/actions/claims';
import { GetClaimDetails } from 'store/actions/claims';
import { localStorageVarible } from "variables";
import jwt_decode from "jwt-decode";


const ClaimStatusChangeModal = ({ openModal, toggleModal, action }) => {
    const dispatch = useDispatch();
    let params = useParams();
    let navigate = useNavigate();
    const {rejection_reasons} = useSelector((state) => state.claimsReducer);
    const status_change_input_values = useSelector((state) => state.claimsReducer.status_change_input_values);
    const {rejection_reason, internal_comments, external_comments} = status_change_input_values;
    

    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);

    useEffect(() => {
        if (action === "reject") {
            dispatch(getRejectionReasons());
        }
        return () => {
            dispatch(handleChangeInputStatus({name :"rejection_reason", value : ""}))
            dispatch(handleChangeInputStatus({name : "internal_comments", value : ""}))
            dispatch(handleChangeInputStatus({name : "external_comments", value: ""}))

        }
    }, [action]);

    const _handleFieldChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        dispatch(handleChangeInputStatus({name, value}))
    } 

    const _initialHandleClaimCallBack = () => {
        // dispatch(GetClaimDetails(params.id));
        // let userDetails = jwt_decode(localStorage.getItem(localStorageVarible));
        // dispatch(GetClaimActionsByRoleId(userDetails.RoleId));
        toggleModal();
        successAlert({title: "Status Changed Successfully", text:""});
        // navigate("/claim/tasks?tab=0");
        navigate(0);
        console.log("Success");
    }

    const _initialHandle = () => {
        dispatch(initialHandleClaim({...status_change_input_values, statusId: action === "reject" ? 19 : 11, claimId:params.id}, _initialHandleClaimCallBack));
    }

    const animatedComponents = makeAnimated();


    return (
        <Modal
            closeTimeoutMS={0}
            ariaHideApp={false}
            isOpen={openModal}
            style={modalStyleCenterStatus}
        >
            <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInDuration={1000}
                animationOutDuration={1000}
                isVisible={openModal}
            >
                <div className="modal-header">
                    <button onClick={() => toggleModal()} type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="ltnd__adding-modal-inner">
                        <div className="section-title-area text-center mb-30---">
                            <h1 className="section-title">{action?.toUpperCase()} CLAIM</h1>
                        </div>
                        <div className="row">
                            {action === "reject" &&
                                <div className="col-lg-12 pb-2">
                                    <h6 className="ltnd__title-3 mt-2">Rejection Reason</h6>
                                    <select
                                        class="nice-select"
                                        name="rejection_reason"
                                        value={rejection_reason}
                                        onChange={_handleFieldChange}
                                    >
                                        {rejection_reasons?.map((reason, index) => (
                                            <option value={reason.Reason}> {reason.Reason} </option>

                                        ))
                                            || []}

                                    </select>
                                </div>
                            }
                            <div className="col-lg-12">
                                <h6 className="ltnd__title-3 mt-2">Internal Comments</h6>
                                <textarea
                                    onChange={_handleFieldChange}
                                    rows="1" 
                                    value={internal_comments}
                                    name="internal_comments">

                                </textarea>
                            </div>
                            <div className="col-lg-12">
                                <h6 className="ltnd__title-3 mt-2">External Comments</h6>
                                <textarea
                                    onChange={_handleFieldChange}
                                    rows="1"
                                    value={external_comments}
                                    name="external_comments">

                                </textarea>
                            </div>
                        </div>

                        <div className="ltnd__right btn-normal float-end pb-4 ">
                            <div className="btn-wrapper">
                                <button onClick={() => toggleModal()} className="btn theme-btn-3 btn-round-12">Cancel</button>
                                <button onClick={_initialHandle} className={`btn ${action === "reject" ? "btn-danger" : "theme-btn-1"} btn-round-12`}>{capitalizeFirstLetter(action || "")}</button>
                            </div>
                        </div>

                    </div>
                </div>
            </Animated>
        </Modal>






    )
}

export default ClaimStatusChangeModal;
