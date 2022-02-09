import React from 'react';
import carImg from 'assets/img/icons/mc/png/10.png';

function UserList() {



    return (
        <React.Fragment>
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__garage-table-wrap">
                        <div className="ltn__select-availability-table  d-none d-md-block ltn__scrollbar">
                            <ul className="ltn__select-availability-table-head">
                                <li className="table-data-6">Name</li>
                                <li className="table-data-7 ltn__color-1">ID</li>
                                <li className="table-data-5">Email</li>
                                <li className="table-data-5">Mobile number</li>
                                <li className="table-data-6">Role</li>
                                <li className="table-data-5">Status</li>
                                <li className="table-data-7">Edit </li>
                            </ul>
                            <ul className="ltn__select-availability-table-row">
                                <li className="table-data-6">
                                    <strong>
                                        <img src={carImg} alt="car" />
                                        Ahmad
                                        Housam{" "}
                                    </strong>
                                </li>
                                <li className="table-data-7 ltn__color-1">15869</li>
                                <li className="table-data-5">yasminali@gmail.com</li>
                                <li className="table-data-3">079 079 1189</li>
                                <li className="table-data-12">
                                    <div className="input-item ltnd__table-nice-select">
                                        <select className="nice-select">
                                            <option>Administrator</option>
                                            <option>Option 1 </option>
                                            <option>Option 2 </option>
                                            <option>Option 3 </option>
                                        </select>
                                    </div>
                                </li>
                                <li className="table-data-5">
                                    <div className="ltn__table-active-status clearfix">
                                        <div className="ltn__checkbox-radio-group inline">
                                            <label className="ltn__switch-2">
                                                <input type="checkbox" defaultChecked="" />{" "}
                                                <i className="lever" />{" "}
                                                <span className="text"> Active</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li className="table-data-7">
                                    <strong>
                                        <a href="#" className="" title="Quick View" data-bs-toggle="modal" data-bs-target="#edit_table_item_modal">
                                            Edit
                                        </a>
                                    </strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>)
}

export default UserList;
