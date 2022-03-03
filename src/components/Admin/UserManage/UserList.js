import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getUsers } from "store/actions/users/users_screen";
import Pagination from 'components/Pagination/Pagination';
import { setUserPage } from 'store/actions/users/users_screen';
import { getAllowActions } from 'functions';
import Loader from 'components/Loader/Loader';

function UserList() {
    let [searchParams, setSearchParams] = useSearchParams();
    let dispatch = useDispatch();
    const { users,
        roles,
        loadingUsers,
        users_per_page,
        users_page_index,
        users_count,
        userValues
    } = useSelector(state => state.usersScreenReducer);

    const { search_text, search_option, sort_name, sort_type } = userValues;

    const { permissions } = useSelector(state => state.authReducer);
    let pre_actions = getAllowActions({ permissions, module_name: "AUM" });


    const _handleEdit = (id) => {
        searchParams.set("action", "edit_user");
        searchParams.set("id", id);
        setSearchParams(searchParams);
    }

    const _paginationHandler = (pageIndex) => {
        dispatch(setUserPage(pageIndex));
    }


    useEffect(() => {
        dispatch(getUsers({ users_per_page, users_page_index, search_text, search_option, sort_name, sort_type }));
    }, [users_per_page, users_page_index]);


    return (
        <React.Fragment>
            <div className="row">
                <div className="col-lg-12">
                    {loadingUsers ?
                        <Loader />
                        :
                        <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__agencies-table-wrap">
                            <div className="ltn__select-availability-table  d-none d-md-block">
                                <ul className="ltn__select-availability-table-head">
                                    <li className="table-data-6">Name</li>
                                    <li className="table-data-5">Email</li>
                                    <li className="table-data-5">Mobile number</li>
                                    <li className="table-data-6">Role</li>
                                    <li className="table-data-5">Status</li>
                                    <li className="table-data-7"> </li>
                                </ul>
                                {users.map((user) => (
                                    <ul key={user.UserId} className="ltn__select-availability-table-row">
                                        <li className="table-data-6">
                                            <strong>
                                                <img src={user.ImageUrl && `${process.env.REACT_APP_API_ENVIROMENT}/${user.ImageUrl}`} alt="" />
                                                {`${user.FirstName} ${user.LastName}`}
                                            </strong>
                                        </li>
                                        <li className="table-data-5">{user.Email}</li>
                                        <li className="table-data-3">{user.MobileNo}</li>
                                        <li className="table-data-12">
                                            {roles.find(role => role.RoleId === user.RoleId)?.RoleName}
                                        </li>
                                        <li className="table-data-5">
                                            <div className="ltn__table-active-status clearfix">
                                                <div className="ltn__checkbox-radio-group inline">
                                                    <label className="ltn__switch-2">
                                                        <input type="checkbox" disabled defaultChecked={user.Status === 1 ? true : false} />
                                                        <i className="lever" />
                                                        <span className="text"> Active</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="table-data-7">
                                            {pre_actions?.includes("UPDATE") &&
                                                <strong>
                                                    <a onClick={() => _handleEdit(user.UserId)} role="button" title="EditUser" >
                                                        Edit
                                                    </a>
                                                </strong>
                                            }
                                        </li>
                                    </ul>
                                ))}
                            </div>



                            <div className="ltn__select-availability-table-responsive d-md-none">
                                {users.map((user) => (
                                    <ul key={user.UserId} className="ltn__select-availability-table-row-responsive-item">
                                        <li><span>Name</span> <span className="tower-name"><strong>{user.UserName}</strong></span></li>
                                        <li><span>ID</span> <span>{user.UserId}</span></li>
                                        <li><span>Email</span> <span>{user.Email}</span></li>
                                        <li><span>Phone Number</span> <span>{user.MobileNo}</span></li>
                                        <li><span>Role</span> <span>{roles.find(role => role.RoleId === user.RoleId)?.RoleName}</span></li>
                                        <li><span>Status</span> <span><div className="ltn__table-active-status clearfix">
                                            <div className="ltn__checkbox-radio-group inline">
                                                <label className="ltn__switch-2">
                                                    <input type="checkbox" defaultChecked={user.Status === 1 ? true : false} />
                                                    <i className="lever" />
                                                    <span className="text"> Active</span>
                                                </label>
                                            </div>
                                        </div></span></li>
                                        <li>
                                            <span>
                                                {pre_actions?.includes("UPDATE") &&

                                                    <strong>
                                                        <a onClick={() => _handleEdit(user.UserId)}>
                                                            Edit
                                                        </a>
                                                    </strong>
                                                }
                                            </span>
                                        </li>
                                    </ul>
                                ))}
                            </div>


                            <Pagination recordsCount={users_count} pageIndex={users_page_index} recordsPerPage={users_per_page} handler={_paginationHandler} className="mt-3" />

                        </div>
                    }
                </div>
            </div>

        </React.Fragment>)
}

export default UserList;
