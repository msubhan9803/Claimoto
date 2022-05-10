import React, { useEffect, createRef } from 'react'
import Modal from 'react-modal';
import { Animated } from "react-animated-css";
import { modalStyleCenterTask } from 'variables/modalCSS';
import { useDispatch, useSelector } from 'react-redux';
import makeAnimated from 'react-select/animated';
import { Link } from 'react-router-dom';
import { getAllowActions } from 'functions';
import { getStatusesOfClaim } from 'store/actions/taskList';


const TrackTaskModal = ({ openModal, toggleModal }) => {

    const dispatch = useDispatch();
    const { task_status } = useSelector(state => state.taskListScreenReducer);


    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);





    const animatedComponents = makeAnimated();


    useEffect(() => {
        // dispatch(getStatusesOfClaim());
    }, []);


    return (
        <Modal
            closeTimeoutMS={500}
            ariaHideApp={false}
            isOpen={openModal}
            style={modalStyleCenterTask}
        >
            <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInDuration={1000}
                animationOutDuration={1000}
                isVisible={openModal}
            >
                <div className="modal-header">
                    <button onClick={toggleModal} type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="ltnd__adding-modal-inner">
                        <div className="section-title-area text-center mb-30---">
                            <h1 className="section-title">Track</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltnd__track-modal-item-wrap">
                                    {task_status?.map((status, index) => {
                                        return (
                                            <div key={status.StatusId || ""}
                                                className={`ltnd__track-modal-item ltnd__track-modal-item_active`}
                                            // className={`ltnd__track-modal-item ${index === 3 ? "ltnd__track-modal-item_active" : ""} `}
                                            >
                                                <h5>{status.StatusName || ""}</h5>
                                                <p>{status.StepComments || ""}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Animated>
        </Modal>






    )
}

export default TrackTaskModal;
