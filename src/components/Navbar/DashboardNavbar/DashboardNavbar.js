import React, { useState , useEffect} from "react";
import { Link } from 'react-router-dom'
import mcIcon from 'assets/img/icons/mc/png/10.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faCalendar, faBell } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from 'store/actions/auth/user';
import { getCurrentPeriodOfDay } from "functions";
import ClickAwayListener from 'react-click-away-listener';
import { getNotifications } from "store/actions/notifications";
import { formatDateTime } from "functions";


export default function DashboardNavbar() {

  const dispatch = useDispatch();
  const { FirstName, LastName, Username, Email, ImageUrl } = useSelector(state => state.authReducer.user_details);
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const _handleLogout = () => {
    dispatch(handleLogout());
  }



  const {
    list,
    loading,
    records_per_page,
    page_index,
    count,
  } = useSelector(state => state.notificationsScreenReducer.notifications);




  useEffect(() => {
    dispatch(getNotifications({
      records_per_page: 5,
      page_index: 1,
      search_option: "",
      search_text: "",
      sort_type: "asc",
      sort_name: "",
    }));
  }, []);



  const _toggleUserDetails = () => {

  }

  return (
    <React.Fragment>
      {/* HEADER AREA START */}
      <div className="ltnd__header-area section-bg-5" style={{ padding: '25px' }} >
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
                      <ClickAwayListener onClickAway={() => setShowNotifications(false)}>
                        <div>
                          <a className="toggle" role="button" onClick={() => setShowNotifications(!showNotifications)} >
                            <FontAwesomeIcon icon={faBell} />
                          </a>
                          <div className="ltnd-dropdown-menu dropdown-menu-notifications" style={showNotifications ? { visibility: "visible", opacity: 1 } : { visibility: "hidden", opacity: 0 }}>
                            <div className="head">
                              <h4 className="title">Notification</h4>
                            </div>
                            <div className="ltnd-dropdown-menu-inner ltn__scrollbar">
                              <ul>
                                {list.map(notification => {
                                  return (
                                    <li>
                                      <div className="ltnd-dropdown-menu-item">
                                        <Link to={`/claim/claim_detail/${notification?.ClaimId}`}>
                                          <div className="image">
                                            <img src={ImageUrl ? `${process.env.REACT_APP_API_ENVIRONMENT}/${ImageUrl}` : mcIcon} alt="user_image" />
                                          </div>
                                          <div className="content">
                                            <h6>
                                              <strong>{notification?.Notification_Titile || ""}</strong>
                                              <strong>{notification?.Notification_Body || ""}</strong>
                                            </h6>
                                            <p className="ltn__color-1">{formatDateTime(notification?.CreatedDate)?.dateTime || ""} </p>
                                          </div>
                                        </Link>
                                      </div>
                                    </li>
                                  )
                                })

                                }
                              </ul>
                            </div>
                          </div>
                        </div>
                      </ClickAwayListener>
                    </li>
                    {/*User Account*/}
                    <li className="ltnd-dropdown ltnd__user-img">
                      <ClickAwayListener onClickAway={() => setShowProfile(false)}>
                        <div>
                          <a className="toggle" role="button" >
                            <img src={ImageUrl ? `${process.env.REACT_APP_API_ENVIRONMENT}/${ImageUrl}` : mcIcon} onClick={() => setShowProfile(!showProfile)} alt="user_image" />
                          </a>
                          <div className="ltnd-dropdown-menu dropdown-menu-user" style={showProfile ? { visibility: "visible", opacity: 1 } : { visibility: "hidden", opacity: 0 }}>
                            <div className="head">
                              <div className="dropdown-menu-user-img">
                                <img src={ImageUrl ? `${process.env.REACT_APP_API_ENVIRONMENT}/${ImageUrl}` : mcIcon} alt="user_image" />
                              </div>
                              <div className="dropdown-menu-user-info">
                                <h6>{`${FirstName} ${LastName}`}</h6>
                                <p className="dropdown-menu-user-mail">
                                  {Email}
                                </p>

                              </div>
                            </div>
                            <div className="ltnd-dropdown-menu-inner ltn__scrollbar">
                              <ul>
                                {/* <li>
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
                            </li> */}
                                <li>
                                  <div className="ltnd-dropdown-menu-item">
                                    <p >
                                      <Link to="/admin/settings/account_preferences"><strong> Account</strong></Link>
                                    </p>
                                  </div>
                                </li>
                                <li>
                                  <div className="ltnd-dropdown-menu-item">
                                    <p>
                                      <a onClick={_handleLogout} role="button"><strong>Logout</strong></a>
                                    </p>
                                  </div>
                                </li>

                              </ul>
                            </div>
                          </div>
                        </div>
                      </ClickAwayListener>
                    </li>
                    {/* <li className="ltnd-dropdown ltnd__user-img">
                      <a role="button" onClick={_handleLogout} className="toggle" href="#">
                        <FontAwesomeIcon icon={faPowerOff} />

                      </a>
                    </li> */}
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
                <p>Good {getCurrentPeriodOfDay()}</p>
                <h2>{`${FirstName} ${LastName}`}</h2>
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
                      <FontAwesomeIcon icon={faCalendar} />
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
