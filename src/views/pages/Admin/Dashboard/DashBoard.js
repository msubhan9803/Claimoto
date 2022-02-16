import React from 'react'
import Counter from '../../../../components/Admin/Dashboard/Counter/Counter'
import Charts from '../../../../components/Admin/Dashboard/Charts/Charts'
import Progress from '../../../../components/Admin/Dashboard/ProgressBar/Progress'
function DashBoard() {
    return (
        <React.Fragment>
            <div className="body-content-area-inner mt-10">
                <Counter />
                <Charts />
                <Progress />
            </div>

        </React.Fragment>
    )
}

export default DashBoard
