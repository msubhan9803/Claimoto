import React, { useState } from "react";
import logo from '../../assets/img/logo/logo-icon-1.png'
// import { Link } g
export default function Navbar() {
  const [collapes, setCollapes] = useState(true)
  return (
    <React.Fragment>
      {collapes &&
        <div className="ltnd__responsive-header-area border-bottom d-xl-none">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltnd__responsive-header-inner">
                  <div className="ltnd__site-logo">
                    <a href="index.html">
                      <img src={logo} alt="Logo" />
                    </a>
                  </div>
                  {/* Mobile Menu Button */}
                  <div className="mobile-menu-toggle d-xl-none">
                    <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                      <svg viewBox="0 0 800 600">
                        <path
                          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          id="top"
                        />
                        <path d="M300,320 L540,320" id="middle" />
                        <path
                          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          id="bottom"
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }




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
