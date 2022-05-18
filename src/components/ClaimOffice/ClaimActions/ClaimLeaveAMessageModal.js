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
// import { GetClaimDetails } from 'store/actions/claims';
import { localStorageVarible } from "variables";
import jwt_decode from "jwt-decode";
import { handleChangeInputMessage } from 'store/actions/claims';
import { sendMessagePolicyHolder } from 'store/actions/claims';


const ClaimLeaveAMessageModal = ({ openModal, toggleModal, getClaimDetails }) => {
    const dispatch = useDispatch();
    let params = useParams();
    let navigate = useNavigate();
    const leave_message_input_values = useSelector((state) => state.claimsReducer.leave_message_input_values);
    const {claim_message} = leave_message_input_values;
    

    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);

    useEffect(() => {
        
        return () => {
            dispatch(handleChangeInputMessage({name :"claim_message", value : ""}))

        }
    }, []);

    const _handleFieldChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        dispatch(handleChangeInputMessage({name, value}))
    } 

    const _initialHandleClaimCallBack = () => {
        successAlert({title: "Message Sent Successfully", text:""});
        getClaimDetails();
        toggleModal()
    }

    const _initialHandle = () => {
        let payload = {
            claim_id:params.id,
            message:claim_message
        };
        dispatch(sendMessagePolicyHolder(payload, _initialHandleClaimCallBack));
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
                            <h1 className="section-title">Leave a Message</h1>
                        </div>
                        <div className="row">
                            
                            <div className="col-lg-12">
                                <h6 className="ltnd__title-3 mt-2">Message to Policy Holder</h6>
                                <textarea
                                    onChange={_handleFieldChange}
                                    style={{height:"auto"}}
                                    rows="15"
                                    value={claim_message}
                                    name="claim_message">

                                </textarea>
                            </div>
                        </div>

                        <div className="ltnd__right btn-normal float-end pb-4 ">
                            <div className="btn-wrapper">
                                <button onClick={() => toggleModal()} className="btn theme-btn-3 btn-round-12">Cancel</button>
                                <button onClick={_initialHandle} className="btn theme-btn-1 btn-round-12">{"Send Message"}</button>
                            </div>
                        </div>

                    </div>
                </div>
            </Animated>
        </Modal>






    )
}

export default ClaimLeaveAMessageModal;
