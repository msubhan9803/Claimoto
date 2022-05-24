import React, { useState } from 'react'
// import RespHeader from "components/Admin/ResponsiveHeader/RespHeader";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { handleLogout } from 'store/actions/auth/user';
import ClickAwayListener from 'react-click-away-listener';
import mcIcon from 'assets/img/icons/mc/png/10.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';


function ProductNavbar({ layout }) {
    const dispatch = useDispatch();
    const { FirstName, LastName, Username, Email, ImageUrl } = useSelector(state => state.authReducer.user_details);
    const [showProfile, setShowProfile] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const _handleLogout = () => {
        dispatch(handleLogout());
    }





    return (
        <React.Fragment>
            {/* <RespHeader /> */}
            {/* HEADER AREA START */}
            <div className="ltnd__header-area ltnd__header-area-2 section-bg-5--- " style={{ paddingTop: '30px' }} >
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
                                                        <FontAwesomeIcon icon={faBell} style={{ color: "black" }} />
                                                    </a>
                                                    <div className="ltnd-dropdown-menu dropdown-menu-notifications" style={showNotifications ? { visibility: "visible", opacity: 1 } : { visibility: "hidden", opacity: 0 }}>
                                                        <div className="head">
                                                            <h4 className="title">Notifications (3)</h4>
                                                        </div>
                                                        <div className="ltnd-dropdown-menu-inner ltn__scrollbar">
                                                            <ul>
                                                                <li>
                                                                    <div className="ltnd-dropdown-menu-item">
                                                                        <Link to="/">
                                                                            <div className="image">
                                                                                <img src={ImageUrl ? `${process.env.REACT_APP_API_ENVIROMENT}/${ImageUrl}` : mcIcon} alt="user_image" />
                                                                            </div>
                                                                            <div className="content">
                                                                                <h6>
                                                                                    <strong>{`${FirstName} ${LastName}`} has</strong> viewed the{" "}
                                                                                    <strong>vehicle 13454</strong>
                                                                                </h6>
                                                                                <p className="ltn__color-1">2 mins ago </p>
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="ltnd-dropdown-menu-item">
                                                                        <Link to="/">
                                                                            <div className="image">
                                                                                <img src={ImageUrl ? `${process.env.REACT_APP_API_ENVIROMENT}/${ImageUrl}` : mcIcon} alt="user_image" />
                                                                            </div>
                                                                            <div className="content">
                                                                                <h6>
                                                                                    <strong>{`${FirstName} ${LastName}`} has</strong> viewed the{" "}
                                                                                    <strong>vehicle 13454</strong>
                                                                                </h6>
                                                                                <p className="ltn__color-1">2 mins ago </p>
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="ltnd-dropdown-menu-item">
                                                                        <a href="#">
                                                                            <div className="image">
                                                                                <img src={ImageUrl ? `${process.env.REACT_APP_API_ENVIROMENT}/${ImageUrl}` : mcIcon} alt="user_image" />
                                                                            </div>
                                                                            <div className="content">
                                                                                <h6>
                                                                                    <strong>{`${FirstName} ${LastName}`} has</strong> viewed the{" "}
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
                                                </div>
                                            </ClickAwayListener>
                                        </li>
                                        {/*User Account*/}
                                        <li className="ltnd-dropdown ltnd__user-img">
                                            <ClickAwayListener onClickAway={() => setShowProfile(false)}>
                                                <div>
                                                    <a className="toggle" role="button" >
                                                        <img src={ImageUrl ? `${process.env.REACT_APP_API_ENVIROMENT}/${ImageUrl}` : mcIcon} onClick={() => setShowProfile(!showProfile)} alt="user_image" />
                                                    </a>
                                                    <div className="ltnd-dropdown-menu dropdown-menu-user" style={showProfile ? { visibility: "visible", opacity: 1 } : { visibility: "hidden", opacity: 0 }}>
                                                        <div className="head">
                                                            <div className="dropdown-menu-user-img">
                                                                <img src={ImageUrl ? `${process.env.REACT_APP_API_ENVIROMENT}/${ImageUrl}` : mcIcon} alt="user_image" />
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
                                                                            <Link to={`/${layout}/settings/account_preferences`}><strong> Account</strong></Link>
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

            </div>
            {/* HEADER AREA END */}
        </React.Fragment>
    )
}

export default ProductNavbar
