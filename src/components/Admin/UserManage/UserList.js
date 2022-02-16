import React, { useEffect } from 'react';
import carImg from 'assets/img/icons/mc/png/10.png';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getUsers } from "store/actions/users/users_screen";

function UserList() {
    let [searchParams, setSearchParams] = useSearchParams();
    let dispatch = useDispatch();
    const { users, roles } = useSelector(state => state.usersScreenReducer);
    const _handleEdit = (id) => {
        searchParams.set("action", "edit_user");
        searchParams.set("id", id);
        setSearchParams(searchParams);
    }


    useEffect(() => {
        dispatch(getUsers());
    }, []);


    return (
        <React.Fragment>
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__agencies-table-wrap">
                        <div className="ltn__select-availability-table  d-none d-md-block">
                            <ul className="ltn__select-availability-table-head">
                                <li className="table-data-6">Name</li>
                                <li className="table-data-7 ltn__color-1">ID</li>
                                <li className="table-data-5">Email</li>
                                <li className="table-data-5">Mobile number</li>
                                <li className="table-data-6">Role</li>
                                <li className="table-data-5">Status</li>
                                <li className="table-data-7">Edit </li>
                            </ul>
                            {users.map((user) => (
                                <ul key={user.UserId} className="ltn__select-availability-table-row">
                                    <li className="table-data-6">
                                        <strong>
                                            <img src={carImg || user.ImageUrl} alt="user_pic" />
                                            {user.UserName}
                                        </strong>
                                    </li>
                                    <li className="table-data-7 ltn__color-1">{user.UserId}</li>
                                    <li className="table-data-5">{user.Email}</li>
                                    <li className="table-data-3">{user.MobileNo}</li>
                                    <li className="table-data-12">
                                        <div className="input-item ltnd__table-nice-select">
                                            <select disabled className="nice-select" value={user.RoleId}>
                                                {roles.map((role) => (
                                                    <option key={role.RoleId} value={role.RoleId}>{role.RoleName}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </li>
                                    <li className="table-data-5">
                                        <div className="ltn__table-active-status clearfix">
                                            <div className="ltn__checkbox-radio-group inline">
                                                <label className="ltn__switch-2">
                                                    <input type="checkbox" defaultChecked={user.Status} />
                                                    <i className="lever" />
                                                    <span className="text"> Active</span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="table-data-7">
                                        <strong>
                                            <a onClick={() => _handleEdit(user.UserId)} className="" title="EditUser" >
                                                Edit
                                            </a>
                                        </strong>
                                    </li>
                                </ul>
                            ))}
                        </div>



                        <div class="ltn__select-availability-table-responsive d-md-none">
                            {users.map((user) => (
                                <ul class="ltn__select-availability-table-row-responsive-item">
                                    <li><span>Name</span> <span class="tower-name"><strong>{user.UserName}</strong></span></li>
                                    <li><span>ID</span> <span>{user.UserId}</span></li>
                                    <li><span>Email</span> <span>{user.Email}</span></li>
                                    <li><span>Phone Number</span> <span>{user.MobileNo}</span></li>
                                    <li><span>Role</span> <span>{roles.find(role=>role.RoleId === user.RoleId)?.RoleName}</span></li>
                                    <li><span>Status</span> <span><div className="ltn__table-active-status clearfix">
                                        <div className="ltn__checkbox-radio-group inline">
                                            <label className="ltn__switch-2">
                                                <input type="checkbox" defaultChecked={user.Status} />
                                                <i className="lever" />
                                                <span className="text"> Active</span>
                                            </label>
                                        </div>
                                    </div></span></li>
                                    <li>
                                        <span>
                                            <strong>
                                                <a onClick={() => _handleEdit(user.UserId)}>
                                                    Edit
                                                </a>
                                            </strong>
                                        </span>
                                    </li>
                                </ul>
                            ))}
                        </div>



                    </div>
                </div>
            </div>
        </React.Fragment>)
}

export default UserList;
