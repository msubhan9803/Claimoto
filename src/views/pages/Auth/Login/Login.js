import React, { useState, useEffect } from "react";
import motorImg from "assets/img/motor/login-bg.png";
import { setLoginValues } from "store/actions/auth/user";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { loginUser } from "store/actions/auth/user";
import Loader from "components/Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import LoaderAnimation from "components/Loader/AnimatedLoaded";

const Login = () => {
  let navigate = useNavigate();
  //   disptach hooks
  const dispatch = useDispatch();

  //  select redux state value

  const { token, login_user, user_details, loading_login } = useSelector(
    (state) => state.authReducer
  );
  const { username, password } = login_user;

  // //   User authentcicate or not
  // useEffect(() => {
  //     if (token && user_details) {
  //         navigate('/admin/')
  //     }

  // }, [token, user_details])

  useEffect(() => {
    // Setting layout based on user roles
    let role = user_details?.RoleId;
    if (role) {
      switch (role) {
        case "0":
          break;

        case "7":
          break;

        default:
          break;
      }
    }
  }, [user_details]);

  //Show hide Password
  const [showPass, setShowPass] = useState(false);

  //Handle Change
  const _handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    dispatch(setLoginValues({ name, value }));
  };

  //Form Validtion
  const formSchema = Yup.object().shape({
    password: Yup.string().required("Password is mendatory"),
    user_name: Yup.string().required("Username is mendatory"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ mode: "all", resolver: yupResolver(formSchema) });

  const _onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  const _navigateUrl = () => {
    let role = user_details.RoleId;
    switch (role) {
      case "0":
        return "/admin/";

      case "7":
        return "/claim/";

      default:
        return "/admin/";
    }
  };

  return (
    <React.Fragment>
      {token ? (
        <Navigate to={_navigateUrl()} />
      ) : (
        <div className="body-wrapper">
          {/* Body Content Area Start */}
          <div className="body-content-area ltnd__no-sidebar-menu body-100vh body-bg-1---">
            {/* LOGIN AREA START */}
            <div className="ltn__login-area">
              <div className="row">
                <div
                  className="col-5"
                  style={{
                    backgroundImage: `url(${motorImg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  {/* <img src={motorImg} style={{height:window.screen.height + 50}} /> */}
                  {/* <img src={motorImg} style={{ width: "100%", height: "100vh" }} /> */}
                </div>
                <div className="col-7">
                  <div className="ltnd__login-wrap">
                    <div className="account-login-inner">
                      <div className="section-title-area mb-30">
                        <h1 className="section-title">Sign in to Claimoto</h1>
                        <p>Enter your details below</p>
                      </div>
                      <form
                        onSubmit={handleSubmit(_onSubmit)}
                        className="ltn__form-box"
                      >
                        <input
                          type="text"
                          value={username}
                          onChange={_handleChange}
                          name="text"
                          className="input_field mt-2"
                          placeholder="Username "
                          {...register("user_name")}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="user_name"
                          render={({ message }) => (
                            <p style={{ color: "red" }}>{message}</p>
                          )}
                        />
                        <input
                          password={password}
                          type={showPass ? "text" : "password"}
                          onChange={_handleChange}
                          className="mt-2"
                          placeholder="Password "
                          name="password"
                          {...register("password")}
                        />
                        <FontAwesomeIcon
                          style={{ marginLeft: "-30px", cursor: "pointer" }}
                          icon={showPass ? faEye : faEyeSlash}
                          onClick={() => setShowPass(!showPass)}
                        />

                        {/* <i
                          className={
                            showPass ? "far fa-eye" : "far fa-eye-slash"
                          }
                          id="togglePassword"
                          style={{ marginLeft: "-30px", cursor: "pointer" }}
                          onClick={() => setShowPass(!showPass)}
                        ></i> */}
                        <ErrorMessage
                          errors={errors}
                          name="password"
                          render={({ message }) => (
                            <p style={{ color: "red" }}>{message}</p>
                          )}
                        />
                        {/* <div className="btn-normal">
                                        <Link to="/reset_password" className="ltn__secondary-color">
                                            Frogot password?
                                        </Link>
                                    </div> */}
                        {loading_login ? (
                          <LoaderAnimation />
                        ) : (
                          <div className="btn-wrapper mt-30">
                            <button
                              className="theme-btn-1 btn btn-block w-100 btn-round-12"
                              type="submit"
                              disabled={loading_login}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "center",
                                }}
                              >
                                <span> Sign in </span>
                              </div>
                            </button>
                          </div>
                        )}

                        {/* <div className="btn-normal mt-30">
                                        <span>
                                            Don’t have an account?{" "}
                                            <Link to="/register" className="ltn__secondary-color">
                                                Register
                                            </Link>
                                        </span>
                                    </div> */}
                      </form>
                      {/* </Formik> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div
                            className="ltn__login-area-img bg-image"
                            data-bs-bg={motorImg}
                        /> */}
            </div>
            {/* LOGIN AREA END */}
          </div>
          {/* Body Content Area End */}
        </div>
      )}
      {/* Body main wrapper end */}
    </React.Fragment>
  );
};

export default Login;
