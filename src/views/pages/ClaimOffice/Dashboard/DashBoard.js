import React from 'react'
import Counter from 'components/Admin/Dashboard/Counter/Counter'
import Charts from 'components/Admin/Dashboard/Charts/Charts'
import Progress from 'components/Admin/Dashboard/ProgressBar/Progress'
import { useSelector } from 'react-redux';
import { getAllowActions } from 'functions';
import ADAnimation from 'components/AccessDenied/ADAnimation';
function DashBoard() {


    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);

    let dashboard_actions = getAllowActions({ permissions, module_name: "AD" });




    return (
        <React.Fragment>
            {dashboard_actions?.includes("VIEW") ?
                <div className="body-content-area-inner mt-10">
                    <h1>DashBoard</h1>
                    {/* <Counter /> */}
                    {/* <Charts /> */}
                    {/* <Progress /> */}
                </div>
            :
            <ADAnimation /> 
        }
        </React.Fragment>
    )
}

export default DashBoard
