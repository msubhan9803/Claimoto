import React, {useEffect} from 'react';
import logo from 'assets/img/logo/logo.png';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ErrorMessage } from "@hookform/error-message";
import { useSelector, useDispatch } from 'react-redux';
import { setForgetPasswordValues, sendResetPasswordEmail } from 'store/actions/auth/forget_password';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';
import goBack from "assets/img/icons/mc/png/goback.png"

function NewPassword() {
    const { Code } = useParams();



    const dispatch = useDispatch();
    const { email, loading } = useSelector(state => state.forgetPasswordReducer.values);
    const navigate = useNavigate();
    //Form Validtion
    const formSchema = Yup.object().shape({
        password: Yup.string().optional()
        // .required('Password is mendatory')
        ,
        confirm_password: Yup.string()
            // .required('Password is mendatory')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),
    });

    const { register, handleSubmit, formState: { errors }, control } = useForm({ mode: "all", resolver: yupResolver(formSchema) });

    const _handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        dispatch(setForgetPasswordValues({ name, value }));
    }

    const _onSubmit = data => {
        dispatch(sendResetPasswordEmail(email, navigate))
    };


    useEffect(() => {
        return () => {
            dispatch(setForgetPasswordValues({ name: "email", value: "" }));
        };
    }, []);


    return (
        <React.Fragment>
            {/* Body main wrapper start */}
            <div className="body-wrapper">
                {/* Body Content Area Start */}
                <div className="body-content-area ltnd__no-sidebar-menu body-100vh body-bg-1---">
                    {/* LOGIN AREA START */}
                    <div className="ltn__login-area verify-email-area">
                        <div className="ltnd__login-wrap">
                            <div className="account-login-inner align-self-center text-center">
                                <div className="logo-img mb-55">
                                    <img src={logo} alt="#" />
                                </div>
                                <div className="section-title-area ">
                                    <h1 className="section-title">Let’s choose a new Password</h1>
                                    <p>Enter your new password </p>
                                </div>
                                <form action="#" className="ltn__form-box form-width-360">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter your new password"
                                        className='mt-2'
                                    />
                                    <input
                                        type="password"
                                        name="password-2"
                                        placeholder="Confrim your new password"
                                        className='mt-3'
                                    />
                                    <div className="btn-wrapper mt-20">
                                        <button
                                            className="theme-btn-1 btn btn-block w-100 btn-round-12"
                                            type="submit"
                                        >
                                            Reset password
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* LOGIN AREA END */}
                </div>
                {/* Body Content Area End */}
            </div>



        </React.Fragment>

    )
}

export default NewPassword
