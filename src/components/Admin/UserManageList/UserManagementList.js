import React from 'react'

function UserManagementList() {
    return (
        <React.Fragment>
            {/* SELECT AVAILABILITY AREA START */}

            <div className="select-availability-area pb-120">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                            <div className="ltn__shop-details-tab-menu mb-20">
                                <div className="nav">
                                    <a
                                        className="active show"
                                        data-bs-toggle="tab"
                                        href="#ltn__tab_3_1"
                                    >
                                        Memembers
            </a>
                                    <a data-bs-toggle="tab" href="#ltn__tab_3_2">
                                        User roles
            </a>
                                </div>
                            </div>
                            <div className="tab-content">
                                {/* ltnd__garage-table-wrap  */}
                                <div className="tab-pane fade active show" id="ltn__tab_3_1">
                                    <div className="ltn__apartments-tab-content-inner ">
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
                                                                    <img src="img/icons/mc/png/9.png" alt="#" /> Ahmad
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
                                                                    <a href="#" class="" title="Quick View" data-bs-toggle ="modal" data-bs-target="#edit_table_item_modal">
                                                                        Edit
                                                                    </a>
                                                                </strong> 
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ltnd__agencies-table-wrap  */}
                                <div className="tab-pane fade" id="ltn__tab_3_2">
                                    <div className="ltn__product-tab-content-inner">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__agencies-table-wrap">
                                                    <div className="ltn__select-availability-table  d-none d-md-block">
                                                        <ul className="ltn__select-availability-table-head">
                                                            <li className="table-data-1">Role name</li>
                                                            <li className="table-data-2 ltn__secondary-color">
                                                                Permissions
                </li>
                                                            <li className="table-data-5">Modified by</li>
                                                            <li className="table-data-5">Modified on</li>
                                                            <li className="table-data-5">Status</li>
                                                            <li className="table-data-8 ltn__color-red">Delete</li>
                                                            <li className="table-data-7">Edit </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-1">
                                                                <strong>Administrator </strong>
                                                            </li>
                                                            <li className="table-data-2 ltn__secondary-color">
                                                                Permissions
                </li>
                                                            <li className="table-data-5">yasminali@gmail.com</li>
                                                            <li className="table-data-5">November 12, 2021</li>
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
                                                            <li className="table-data-8">
                                                                <a className="ltn__color-red" href="agency-details.html">
                                                                    <strong>Delete</strong>
                                                                </a>{" "}
                                                            </li>
                                                            <li className="table-data-7">
                                                                <strong>
                                                                    <a
                                                                        href="#"
                                                                        className=""
                                                                        title="Quick View"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#edit_table_item_modal_edit_role"
                                                                    >
                                                                        Edit
                    </a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default UserManagementList
