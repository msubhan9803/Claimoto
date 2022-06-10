import React from 'react'
import CallIcon from "assets/img/call/icon.png"

function ScheduledCalls() {
    return (
        <React.Fragment>
            <div className="ltnd__block-item mt-30 h-100">
                <div className="ltnd__title ltnd__title-1">
                    <h3>Scheduled calls</h3>
                </div>
                <div className="ltn__block-item-info">
                    <div className="ltnd__scheduled-item">
                        <div className="ltnd__scheduled-item-info">
                            <h6>Call with Abdulla</h6>
                            <small className="ltn__color-1">09:30 AM - 10:30 AM</small>
                        </div>
                        <div className="ltnd__scheduled-item-icon">
                            <img src={CallIcon} />
                        </div>
                    </div>
                    <div className="ltnd__scheduled-item">
                        <div className="ltnd__scheduled-item-info">
                            <h6 className="font-weight-6">Monthly status report</h6>
                            <small className="ltn__color-1">09:30 AM - 10:30 AM</small>
                        </div>
                        <div className="ltnd__scheduled-item-icon">
                            <img src={CallIcon} />
                        </div>
                    </div>
                    <div className="ltnd__scheduled-item">
                        <div className="ltnd__scheduled-item-info">
                            <h6 className="font-weight-6">Call with Khalid</h6>
                            <small className="ltn__color-1">09:30 AM - 10:30 AM</small>
                        </div>
                        <div className="ltnd__scheduled-item-icon">
                            <img src={CallIcon} />
                        </div>
                    </div>
                    <div className="ltnd__scheduled-item">
                        <div className="ltnd__scheduled-item-info">
                            <h6 className="font-weight-6">Call with Khalid</h6>
                            <small className="ltn__color-1">09:30 AM - 10:30 AM</small>
                        </div>
                        <div className="ltnd__scheduled-item-icon">
                            <img src={CallIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ScheduledCalls
