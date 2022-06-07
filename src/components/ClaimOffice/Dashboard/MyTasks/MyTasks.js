import React from 'react'

function MyTasks() {
    return (
        <React.Fragment>
            <div className="ltnd__block-item mt-30 h-100">
                <div className="ltnd__title ltnd__title-1">
                    <h3>My tasks</h3>
                </div>
                <div className="ltn__block-item-info">
                    <div className="ltn__progress-bar-inner">
                        <div className="ltn__progress-bar-item ltn__progress-bar-item-3">
                            <div className="progress-bar-title">
                                <p><strong>Approvals required 3/5</strong></p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".5s" role="progressbar" style={{ width: "70%" }}>
                                </div>
                            </div>
                        </div>
                        <div className="ltn__progress-bar-item ltn__progress-bar-item-3">
                            <div className="progress-bar-title">
                                <p><strong>Under assesment 20/10</strong></p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".5s" role="progressbar" style={{ width: "50%" }}>
                                </div>
                            </div>
                        </div>
                        <div className="ltn__progress-bar-item ltn__progress-bar-item-3">
                            <div className="progress-bar-title">
                                <p><strong>Under assesment 20/10</strong></p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".5s" role="progressbar" style={{ width: "50%" }}>
                                </div>
                            </div>
                        </div>
                        <div className="btn-wrapper mb-20">
                            <button className="btn btn-small border-radius-12 bg-ltn-color-11">Due date: 20 November</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MyTasks
