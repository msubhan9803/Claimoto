import React, { useEffect, createRef, useState } from 'react'
import Modal from 'react-modal';
import { Animated } from "react-animated-css";
import { modalStyleCenterScheduleCall } from 'variables/modalCSS';
import { useDispatch, useSelector } from 'react-redux';
import makeAnimated from 'react-select/animated';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getAllowActions, capitalizeFirstLetter } from 'functions';
import { handleChangeInputSchedule, getDaySlots ,scheduleCallHandleClaim , getHourSlots } from 'store/actions/claims';
import { successAlert } from 'functions';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from "react-modern-calendar-datepicker";


const ClaimScheduleCallModal = ({ openModal, toggleModal }) => {
    const dispatch = useDispatch();
    let params = useParams();
    let navigate = useNavigate();
    const claimDetails = useSelector((state) => state.claimsReducer.claimDetails);
    const schedule_call_input_values = useSelector((state) => state.claimsReducer.schedule_call_input_values);
    const {day_slots} = useSelector((state) => state.claimsReducer);
    const { selectedDay, selectedSlot, selectedHourSlot } = schedule_call_input_values;
    

    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);

    useEffect(() => {
        return () => {
            dispatch(handleChangeInputSchedule({ name:"selectedDay", value:"" }))
            dispatch(handleChangeInputSchedule({ name:"selectedSlot", value:"" }))

        }
    }, []);

    const _handleFieldChange = (name, value) => {
        if(name === "selectedHourSlot"){
            dispatch(getHourSlots());
        }
        if(name === "selectedDay"){
            let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            let date = new Date(`${value.month}-${value.day}-${value.year}`);
            let day = days[date.getDay()];
            dispatch(getDaySlots(day, date));
        }
        dispatch(handleChangeInputSchedule({ name, value }))
    }

    const _initialCallHandleClaimCallBack = () => {
        // dispatch(GetClaimDetails(params.id));
        // let userDetails = jwt_decode(localStorage.getItem(localStorageVarible));
        // dispatch(GetClaimActionsByRoleId(userDetails.RoleId));
        toggleModal();
        successAlert({ title: "Call Scheduled Successfully", text: "" });
        // navigate("/claim/tasks?tab=0");
        navigate(0);
    }

    const _initialHandle = () => {
        let date = new Date(`${selectedDay.month}-${selectedDay.day}-${selectedDay.year}`);
        let payload = {
            "ClaimId": params.id,
            "Date": date,
            "TimeSlot": selectedSlot,
            "Remarks": "string",
            "Comment": "string",
        }
        // dispatch(scheduleCallHandleClaim({...status_change_input_values, statusId: action === "reject" ? 19 : 11, claimId:params.id}, _initialCallHandleClaimCallBack));
    }

    const animatedComponents = makeAnimated();


    return (
        <Modal
            closeTimeoutMS={0}
            ariaHideApp={false}
            isOpen={openModal}
            style={modalStyleCenterScheduleCall}
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
                            <h1 className="section-title">Schedule a Call</h1>
                        </div>
                        <div className="row">

                            <div className="col-lg-7 text">
                                <h6 className="ltnd__title-3 mt-2">Date</h6>
                                <Calendar
                                    style={{ width: "100%" }}
                                    value={selectedDay}
                                    onChange={(e)=> _handleFieldChange("selectedDay", e)}
                                    shouldHighlightWeekends
                                    colorPrimary="#0d6efd" // added this
                                />
                            </div>
                            <div className="col-lg-5">
                                <h6 className="ltnd__title-3 mt-2">Hour Slots</h6>
                                <div className='timeslots'>
                                    {day_slots.map((i) => (
                                        <div role="button" onClick={() => _handleFieldChange("selectedHourSlot", i)} className={`timeslot ${selectedHourSlot === i ? "bg-primary text-light" : "bg-light text-secondary"}  text-center p-2 rounded mb-4`}>
                                            <span>{i}</span>
                                        </div>
                                    ))
                                    }


                                </div>
                            </div>
                        </div>

                        <div className="ltnd__right btn-normal text-center pb-4 ">
                            <div className="btn-wrapper">
                                <button onClick={() => toggleModal()} className="btn theme-btn-3 btn-round-12">Cancel</button>
                                <button onClick={_initialHandle} className="btn theme-btn-1 btn-round-12">Confirm</button>
                            </div>
                        </div>

                    </div>
                </div>
            </Animated>
        </Modal >






    )
}

export default ClaimScheduleCallModal;






