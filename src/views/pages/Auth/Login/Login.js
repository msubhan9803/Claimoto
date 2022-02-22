import React, { useState, useEffect } from 'react'
import motorImg from '../../../../assets/img/motor/login-bg-1.png'
import { loginUser } from '../../../../store/actions/auth/user'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
function Login() {

    let navigate = useNavigate();
    
    //   disptach hooks
    const dispatch = useDispatch()

    //  select redux state value 

    const token = useSelector(state => state.userReducer.token)

    //   User authentcicate or not 
    useEffect(() => {
        if (token) {
            // <Redirect to="/dashboard" />
            navigate('/admin')
        }

    }, [token])


    // password show and hide control

    const [showPass, setShowPass] = useState(false)



    // user form validation

    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email Field is required'),
        password: Yup.string().required('Password Field is required'),
    });



    return (
        <React.Fragment>
            <div className="body-wrapper">
                {/* Body Content Area Start */}
                <div className="body-content-area ltnd__no-sidebar-menu body-100vh body-bg-1---">
                    {/* LOGIN AREA START */}
                    <div className="ltn__login-area">
                        <div
                            className="ltn__login-area-img bg-image"
                            data-bs-bg={motorImg}
                        />
                        <div className="ltnd__login-wrap">
                            <div className="account-login-inner">
                                <div className="section-title-area mb-30">
                                    <h1 className="section-title">Sign in to Motor claim</h1>
                                    <p>Enter your details below</p>
                                </div>
                                {/* Form with Formik start */}
                                {/* <Formik
                                    initialValues={{
                                        email: '',
                                        password: ''
                                    }}
                                    validationSchema={SignupSchema}
                                    onSubmit={values => {
                                        // dispatch login function
                                        dispatch(loginUser(values))

                                    }}
                                > */}
                                    <form className="ltn__form-box">
                                        <input type="text" name="email" className="input_field" placeholder="Email*" />
                                        {/* <ErrorMessage name="email" /> */}
                                        <input type={showPass ? "text" : "password"} placeholder="Password*" name="password" />
                                        <i className={showPass ? "far fa-eye" : "far fa-eye-slash"}
                                            id="togglePassword"
                                            style={{ marginLeft: '-30px', cursor: 'pointer' }}
                                            onClick={() => setShowPass(!showPass)}></i>
                                        {/* <ErrorMessage name="password" /> */}

                                        <div className="btn-normal">
                                            <Link to="/reset_password" className="ltn__secondary-color">
                                                Frogot password?
                                            </Link>
                                        </div>
                                        <div className="btn-wrapper mt-30">
                                            <button
                                                className="theme-btn-1 btn btn-block w-100 btn-round-12"
                                                type="submit"
                                            >
                                                Sign in
                                            </button>
                                        </div>
                                        <div className="btn-normal mt-30">
                                            <span>
                                                Don’t have an account?{" "}
                                                <Link to="/register" className="ltn__secondary-color">
                                                    Register
                                               </Link>
                                            </span>
                                        </div>
                                    </form>
                                {/* </Formik> */}
                            </div>
                        </div>
                    </div>
                    {/* LOGIN AREA END */}
                </div>
                {/* Body Content Area End */}
            </div>
            {/* Body main wrapper end */}


        </React.Fragment>
    )
}

export default Login
