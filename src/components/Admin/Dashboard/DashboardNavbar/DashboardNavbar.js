import React from "react";
import RespHeader from "../../ResponsiveHeader/RespHeader";

export default function DashboardNavbar() {
  return (
    <React.Fragment>
        <RespHeader/>
      {/* HEADER AREA START */}
      <div className="ltnd__header-area section-bg-5" >
        {/* ltn__header-top-area start */}
        <div className="ltn__header-top-area top-area-color-white ltnd__header-top-area">
          <div className="row">
            <div className="col-sm-7"></div>
            <div className="col-sm-5">
              <div className="top-bar-right text-end">
                <div className="ltn__top-bar-menu">
                  <ul>
                    {/*Notifications*/}
                    <li className="ltnd-dropdown">
                      <a className="toggle" href="#">
                        <i className="far fa-bell" />
                      </a>
                      <div className="ltnd-dropdown-menu dropdown-menu-notifications">
                        <div className="head">
                          <h4 className="title">Notifications (7)</h4>
                        </div>
                        <div className="ltnd-dropdown-menu-inner ltn__scrollbar">
                          <ul>
                            <li>
                              <div className="ltnd-dropdown-menu-item">
                                <a href="#">
                                  <div className="image">
                                    <img src="img/icons/mc/png/10.png" alt="#" />
                                  </div>
                                  <div className="content">
                                    <h6>
                                      <strong>Yasmin Ali has</strong> viewed the{" "}
                                      <strong>vehicle 13454</strong>
                                    </h6>
                                    <p className="ltn__color-1">2 mins ago </p>
                                  </div>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="ltnd-dropdown-menu-item">
                                <a href="#">
                                  <div className="image">
                                    <img src="img/icons/mc/png/10.png" alt="#" />
                                  </div>
                                  <div className="content">
                                    <h6>
                                      <strong>Yasmin Ali has</strong> viewed the{" "}
                                      <strong>vehicle 13454</strong>
                                    </h6>
                                    <p className="ltn__color-1">2 mins ago </p>
                                  </div>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="ltnd-dropdown-menu-item">
                                <a href="#">
                                  <div className="image">
                                    <img src="img/icons/mc/png/10.png" alt="#" />
                                  </div>
                                  <div className="content">
                                    <h6>
                                      <strong>Yasmin Ali has</strong> viewed the{" "}
                                      <strong>vehicle 13454</strong>
                                    </h6>
                                    <p className="ltn__color-1">2 mins ago </p>
                                  </div>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    {/*User Account*/}
                    <li className="ltnd-dropdown ltnd__user-img">
                      <a className="toggle" href="#">
                        <img src="img/blog/author.jpg" alt="User" />
                      </a>
                      <div className="ltnd-dropdown-menu dropdown-menu-user">
                        <div className="head">
                          <div className="dropdown-menu-user-img">
                            <img src="img/icons/mc/png/10.png" alt="#" />
                          </div>
                          <div className="dropdown-menu-user-info">
                            <h6>Yasmin Ali</h6>
                            <p className="dropdown-menu-user-mail">
                              yasminali@gmail.com
                        </p>
                            <p className="dropdown-menu-user-title">
                              <strong>Account</strong>
                            </p>
                          </div>
                        </div>
                        <div className="ltnd-dropdown-menu-inner ltn__scrollbar">
                          <ul>
                            <li>
                              <div className="ltnd-dropdown-menu-item">
                                <p className="dropdown-menu-user-language">
                                  <strong>Language</strong>
                                </p>
                                <div className="btn-wrapper btn-normal mt-0">
                                  <a href="#" className="btn-active">
                                    English
                              </a>
                                  <a href="#" className="btn-inactive">
                                    ةيبرعلا
                              </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="ltnd-dropdown-menu-item">
                                <p>
                                  <a href="terms-conditions.html">
                                    Terms and conditions
                              </a>
                                </p>
                                <p>
                                  <a href="login.html">Logout</a>
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__header-top-area end */}
        {/* header-middle-area start */}
        <div className="ltnd__header-middle-area">
          <div className="row">
            <div className="col-lg-9">
              <div className="ltnd__page-title-area text-color-white">
                <p>Good morning</p>
                <h2>Yasmin Ali</h2>
              </div>
            </div>
            <div className="col-lg-3 align-self-center text-end">
              <div className="ltnd__date-area date-color-white">
                <div className="ltn__datepicker">
                  <div className="ltn_datepicker-title">
                    <span>Date</span>
                  </div>
                  <div className="input-group date" data-provide="datepicker">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Select Date"
                    />
                    <div className="input-group-addon">
                      <i className="far fa-calendar-alt" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* header-middle-area end */}
      </div>
      {/* HEADER AREA END */}

      

    </React.Fragment>

  );
}
