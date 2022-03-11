import { getAllowActions } from 'functions';
import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

function AccessGroupList() {
    let [searchParams, setSearchParams] = useSearchParams();
    const { access_groups, roles, userValues } = useSelector(state => state.usersScreenReducer);
    const { search_text } = userValues;
    const { permissions } = useSelector(state => state.authReducer);
    let pre_actions = getAllowActions({ permissions, module_name: "AUM" });



    const _handleEdit = (id) => {
        searchParams.set("action", "edit_access_group");
        searchParams.set("id", id);
        setSearchParams(searchParams);
    }

    const _handleView = (id) => {
        searchParams.set("action", "view_access_group");
        searchParams.set("id", id);
        setSearchParams(searchParams);
    }


    return (
        <React.Fragment>
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__agencies-table-wrap">
                        <div className="ltn__select-availability-table  d-none d-md-block">
                            <ul className="ltn__select-availability-table-head">
                                <li className="table-data-6">Name</li>
                                <li className="table-data-6">Role</li>
                                <li className="table-data-5">Status</li>
                                <li className="table-data-5">Default</li>
                                <li className="table-data-7">Edit</li>
                                <li className="table-data-7">View</li>
                            </ul>
                            {access_groups.filter((recrd) => recrd.GroupName.toUpperCase().startsWith(search_text.toUpperCase())).map((ag) => (
                                <ul key={ag.Id} className="ltn__select-availability-table-row">
                                    <li className="table-data-6">
                                        <strong>
                                            {ag.GroupName}
                                        </strong>
                                    </li>
                                    <li className="table-data-12">
                                        {roles.find(role => role.RoleId === ag.RoleId)?.RoleName}
                                    </li>
                                    <li className="table-data-5">
                                        <div className="ltn__table-active-status clearfix">
                                            <div className="ltn__checkbox-radio-group inline">
                                                <label className="ltn__switch-2">
                                                    <input type="checkbox" disabled checked={ag.IsActive} />
                                                    <i className="lever" />
                                                    <span className="text"> Active</span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="table-data-5">
                                        <div className="ltn__table-active-status clearfix">
                                            <div className="ltn__checkbox-radio-group inline">
                                                <label className="ltn__switch-2">
                                                    <input type="checkbox" disabled checked={ag.IsDefault} />
                                                    <i className="lever" />
                                                    <span className="text"> Default</span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="table-data-7">
                                        {!ag.IsDefault &&
                                            pre_actions.includes("UPDATE") &&
                                            <strong>
                                                <a role="button" onClick={() => _handleEdit(ag.Id)} className="" title="Edit">
                                                    Edit
                                                </a>
                                            </strong>
                                        }

                                    </li>
                                    <li className="table-data-7">
                                        {
                                            pre_actions.includes("VIEW") &&
                                            <strong>
                                                <a role="button" onClick={() => _handleView(ag.Id)} className="" title="View">
                                                    View
                                                </a>
                                            </strong>
                                        }
                                    </li>

                                </ul>
                            ))}
                        </div>



                        <div className="ltn__select-availability-table-responsive d-md-none">
                            {access_groups.map((ag) => (
                                <ul className="ltn__select-availability-table-row-responsive-item">
                                    <li><span>Name</span> <span className="tower-name"><strong>{ag.GroupName}</strong></span></li>
                                    <li><span>ID</span> <span>{ag.Id}</span></li>
                                    <li><span>Role</span> <span>{roles.find(role => role.RoleId === ag.RoleId)?.RoleName}</span></li>
                                    <li><span>Status</span> <span><div className="ltn__table-active-status clearfix">
                                        <div className="ltn__checkbox-radio-group inline">
                                            <label className="ltn__switch-2">
                                                <input type="checkbox" defaultChecked={ag.Status} />
                                                <i className="lever" />
                                                <span className="text"> Active</span>
                                            </label>
                                        </div>
                                    </div></span></li>
                                    <li>
                                        <span>
                                            <strong>
                                                <a onClick={() => _handleEdit(ag.Id)}>
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

export default AccessGroupList;
