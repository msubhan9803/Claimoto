import React from 'react'
import RespHeader from "components/Admin/ResponsiveHeader/RespHeader";
import { useDispatch } from "react-redux";
import userImg from 'assets/img/icons/mc/png/10.png';
import { handleLogout } from 'store/actions/auth/user';



function ProductNavbar() {
    const dispatch = useDispatch();

    const _handleLogout = () => {
        dispatch(handleLogout());
    }





    return (
        <React.Fragment>
            <RespHeader />
            {/* HEADER AREA START */}
            <div className="ltnd__header-area ltnd__header-area-2 section-bg-2--- " style={{ paddingTop: '30px' }} >
                {/* ltn__header-top-area start */}
                <div className="ltn__header-top-area top-area-color-white--- ltnd__header-top-area">
                    <div className="row">
                        <div className="col-md-7"></div>
                        <div className="col-md-5">
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
                                                                        <img src={userImg} alt="avatar" />
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
                                                                        <img src={userImg} alt="avatar" />
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
                                                                        <img src={userImg} alt="avatar" />
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
                                                <img src={userImg} alt="User" />

                                            </a>
                                            <div className="ltnd-dropdown-menu dropdown-menu-user">
                                                <div className="head">
                                                    <div className="dropdown-menu-user-img">
                                                        <img src={userImg} alt="avatar" />
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
                                        <li className="ltnd-dropdown ltnd__user-img">
                                            <a role="button" onClick={_handleLogout} className="toggle" href="#">
                                            <i class="far fa-power-off"></i>
                                            </a>
                                        </li>
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
