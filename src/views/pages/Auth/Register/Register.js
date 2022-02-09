import React from 'react'
import motorImg from '../../../../assets/img/motor/login-bg-1.png'
import { Link } from 'react-router-dom'
import { RegisterUser } from '../../../../store/actions/auth/user'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function Register() {

    //  disptach function hooks
    const dispatch = useDispatch()

    //   Selector function hooks
    const userValue = useSelector(state => state.userReducer.user)

    // Onchange Input Value

    const ChangeValue = (e) => {
        e.persist()
        const { name, value } = e.target
        dispatch(RegisterUser(name, value))
    }

    // Validation schema
    const SignupSchema = Yup.object().shape({
        name: Yup.string().required('Password Field is required'),
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
                                    <h1 className="section-title">Create an account</h1>
                                    <p>Enter your details below</p>
                                </div>
                                <Formik
                                    initialValues={{
                                        name: '',
                                        email: '',
                                        password: ''
                                    }}
                                    validationSchema={SignupSchema}
                                    onSubmit={values => {
                                        // same shape as initial values
                                        console.log(values);
                                        // dispatch login function
                                        // dispatch(loginUser(values))

                                    }}
                                >
                                    <Form className="ltn__form-box">
                                        <Field type="text" value={userValue ?.name || ""} onChange={ChangeValue} name="name" placeholder="Full name" />
                                        <ErrorMessage name="name" />
                                        <Field type="text" value={userValue ?.email || ""} onChange={ChangeValue} name="email" placeholder="Email*" />
                                        <ErrorMessage name="email" />
                                        <Field type="password" value={userValue ?.password || ""} onChange={ChangeValue} name="password" placeholder="Password*" />
                                        <ErrorMessage name="password" />

                                        <div className="btn-wrapper mt-20">
                                            <button
                                                className="theme-btn-1 btn btn-block w-100 btn-round-12"
                                                type="submit"
                                            >
                                                Create account
                </button>
                                        </div>
                                        <div className="btn-normal mt-30">
                                            <span>
                                                Already have an account?{" "}
                                                <Link to="/" className="ltn__secondary-color">
                                                    Sign in
                  </Link>
                                            </span>
                                        </div>
                                    </Form>
                                </Formik>
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

export default Register
