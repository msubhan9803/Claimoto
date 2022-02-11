import { formatDateTime } from 'functions';
import React from 'react';
import { useSelector } from 'react-redux';

function RoleList() {

    const { roles } = useSelector(state => state.usersScreenReducer);


    return (
        <React.Fragment>
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__agencies-table-wrap">
                        <div className="ltn__select-availability-table  d-none d-md-block">
                            <ul className="ltn__select-availability-table-head">
                                <li className="table-data-1">Role name</li>
                                <li className="table-data-5">Status</li>
                               
                            </ul>
                            {roles.map((role) => (
                                <ul className="ltn__select-availability-table-row">
                                    <li className="table-data-1">
                                        <strong>{role.name} </strong>
                                    </li>
                                    <li className="table-data-5">
                                        <div className="ltn__table-active-status clearfix">
                                            <div className="ltn__checkbox-radio-group inline">
                                                <label className="ltn__switch-2">
                                                    <input type="checkbox" checked={role.status} />{" "}
                                                    <i className="lever" />
                                                    <span className="text"> Active</span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>)
}

export default RoleList;
