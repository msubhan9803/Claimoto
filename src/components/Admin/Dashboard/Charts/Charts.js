import React from 'react'
import chartOne from '../../../../assets/img/motor/chart-1.jpg'
import chartTwo from '../../../../assets/img/motor/chart-2.jpg'
function Charts() {
    return (
        <React.Fragment>
            {/* BLOCK AREA START ( Chart ) */}
            <div className="ltnd__block-area">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltnd__block-item">
                            <div className="ltnd__title ltnd__title-1">
                                <h3>Overal claim status</h3>
                            </div>
                            <div className="ltn__block-item-info">
                                <img src={chartOne} alt="Chart1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BLOCK AREA END */}
            {/* BLOCK AREA START ( Chart ) */}
            <div className="ltnd__block-area">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltnd__block-item mt-30">
                            <div className="ltnd__title ltnd__title-1">
                                <h3>Claims by age band</h3>
                            </div>
                            <div className="ltn__block-item-info">
                                <img src={chartTwo} alt="chart2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BLOCK AREA END */}


        </React.Fragment>
    )
}

export default Charts
