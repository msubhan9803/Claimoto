import React, { useEffect, createRef, useState } from 'react'
import Modal from 'react-modal';
import { Animated } from "react-animated-css";
import { modalStyleCenterScheduleCall } from 'variables/modalCSS';
import { useDispatch, useSelector } from 'react-redux';
import makeAnimated from 'react-select/animated';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getAllowActions, capitalizeFirstLetter } from 'functions';
import { handleChangeInputSchedule, getDaySlots, scheduleCallHandleClaim, getHourSlots } from 'store/actions/claims';
import { successAlert } from 'functions';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from "react-modern-calendar-datepicker";
import { confirmAlert } from 'functions';


const ClaimScheduleCallModal = ({ openModal, toggleModal, title, sc_id, claim_id, getClaimDetails }) => {
    let date = new Date();
    let today = { day: date.getUTCDate(), month: date.getUTCMonth() + 1, year: date.getUTCFullYear() };
    const dispatch = useDispatch();
    let params = useParams();
    let navigate = useNavigate();
    const [viewHourSlots, setViewHourSlots] = useState(false);
    const { user_details } = useSelector((state) => state.authReducer);
    const claimDetails = useSelector((state) => state.claimsReducer.claimDetails);
    const schedule_call_input_values = useSelector((state) => state.claimsReducer.schedule_call_input_values);
    const { day_slots, hour_slots } = useSelector((state) => state.claimsReducer);
    const { selectedDay, selectedSlot, selectedHourSlot } = schedule_call_input_values;


    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);

    useEffect(() => {
        _handleFieldChange("selectedDay", today);
        dispatch(handleChangeInputSchedule({ name: "selectedSlot", value: "" }))
    }, [openModal]);

    const _handleFieldChange = (name, value) => {
        if (name === "selectedHourSlot") {
            let separate_to_and_from = value.split(" To ");
            let to = separate_to_and_from[1];
            let from = separate_to_and_from[0];
            dispatch(getHourSlots({ to, from }));
            setViewHourSlots(true);
        }
        if (name === "selectedDay") {

            dispatch(getDaySlots(value));
            setViewHourSlots(false);
        }
        dispatch(handleChangeInputSchedule({ name, value }))
    }

    const _callBack = () => {
        successAlert({ title: `Call ${sc_id ? "Rescheduled" : "Scheduled"}  Successfully`, text: "" });
        getClaimDetails();
        toggleModal();

    }

    const _initialHandle = () => {
        let date = new Date(`${selectedDay.month}-${selectedDay.day}-${selectedDay.year}`);
        let separate_to_and_from = selectedSlot.split(" to ");
        let to = separate_to_and_from[0];
        let from = separate_to_and_from[1];
        let payload = {
            "ClaimId": params.id || claim_id,
            "TimeSlotUser": user_details?.UserId || "",
            "TimeSlot": selectedSlot,
            "TimeSlotDate": date,
            "SC_Id": sc_id,
            "StartTime": to,
            "EndTime": from,
            "Date": date,
            "AssignedTo": user_details?.UserId || "",
        }
        dispatch(scheduleCallHandleClaim(payload, _callBack));
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
                            <h1 className="section-title">{title}</h1>
                        </div>
                        <div className="row">

                            <div className="col-lg-7 text">
                                <h6 className="ltnd__title-3 mt-2">Date</h6>
                                <Calendar
                                    style={{ width: "100%" }}
                                    value={selectedDay}
                                    minimumDate={today}
                                    onChange={(e) => _handleFieldChange("selectedDay", e)}
                                    shouldHighlightWeekends
                                    colorPrimary="#0d6efd" // added this
                                />
                            </div>
                            <div className="col-lg-5">
                                <div className='row'>
                                    <div className='col-6'>
                                        <h6 className="ltnd__title-3 mt-2">
                                            {!viewHourSlots ? "Day Slots" : "Hour Slots"}
                                        </h6>
                                    </div>
                                    {viewHourSlots &&
                                        <div className='col-6' style={{ textAlign: "right" }}>
                                            <h6 className="ltnd__title-3 mt-2 " role="button" onClick={() => setViewHourSlots(false)} >Back</h6>
                                        </div>
                                    }
                                </div>
                                {!viewHourSlots ?
                                    <>
                                        <div className='timeslots'>
                                            {day_slots.length > 1 ? day_slots.map((i) => (
                                                <div role="button" onClick={() => _handleFieldChange("selectedHourSlot", i)} className={`timeslot ${selectedHourSlot === i ? "bg-primary text-light" : "bg-light text-secondary"}  text-center p-2 rounded mb-4`}>
                                                    <span>{i}</span>
                                                </div>
                                            ))
                                                :
                                                <small className='text-danger'>No Time Slots Available</small>
                                            }
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='timeslots'>
                                            {hour_slots.length > 1 ? hour_slots.map((i) => (
                                                <div role="button" onClick={() => _handleFieldChange("selectedSlot", i)} className={`timeslot ${selectedSlot === i ? "bg-primary text-light" : "bg-light text-secondary"}  text-center p-2 rounded mb-4`}>
                                                    <span>{i}</span>
                                                </div>
                                            )) :
                                                <small className='text-danger'>No Time Slots Available</small>
                                            }
                                        </div>
                                    </>
                                }
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






