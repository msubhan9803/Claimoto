import { formatDateTime } from 'functions';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRoles } from 'store/actions/users/users_screen';

function RoleList() {
    const dispatch = useDispatch();
    const { roles, userValues } = useSelector(state => state.usersScreenReducer);
    const { search_text } = userValues;


    return (
        <React.Fragment>
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__agencies-table-wrap">
                        <div className="ltn__select-availability-table ">a
                            <ul className="ltn__select-availability-table-head">
                                <li className="table-data-1">Role name</li>
                            </ul>
                            {roles.filter((recrd) => recrd.RoleName.toUpperCase().startsWith(search_text.toUpperCase())).map((role) => (
                                <ul key={role.RoleId} className="ltn__select-availability-table-row">
                                    <li className="table-data-1">
                                        <strong>{role.RoleName} </strong>
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
