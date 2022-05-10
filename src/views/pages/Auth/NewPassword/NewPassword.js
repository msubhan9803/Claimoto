import React, { useEffect } from 'react';
import logo from 'assets/img/logo/logo.png';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ErrorMessage } from "@hookform/error-message";
import { useSelector, useDispatch } from 'react-redux';
import { setForgetPasswordValues, setNewPassword } from 'store/actions/auth/forget_password';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';
import goBack from "assets/img/icons/mc/png/goback.png"

function NewPassword() {
    let [searchParams, setSearchParams] = useSearchParams();



    const dispatch = useDispatch();
    const { email, loading, password, confirm_password } = useSelector(state => state.forgetPasswordReducer.values);
    const navigate = useNavigate();
    //Form Validtion
    const formSchema = Yup.object().shape({
        password: Yup.string().optional()
            .required('Password is mendatory')
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
        dispatch(setNewPassword({password, Code:searchParams.get("Code")}, navigate))
    };


    useEffect(() => {
        return () => {
            dispatch(setForgetPasswordValues({ name: "password", value: "" }));
            dispatch(setForgetPasswordValues({ name: "confirm_password", value: "" }));
            dispatch(setForgetPasswordValues({ name: "loading", value: false }));
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
                                <form onSubmit={handleSubmit(_onSubmit)} className="ltn__form-box form-width-360">
                                    <input
                                        {...register("password")}
                                        className="mt-3"
                                        type="password" onChange={_handleChange} name="password" placeholder="Password" value={password} />
                                    <ErrorMessage
                                        errors={errors}
                                        name="password"
                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                    />

                                    <input
                                        {...register("confirm_password")}
                                        className="mt-3"
                                        type="password" onChange={_handleChange} name="confirm_password" placeholder="Confirm Password" value={confirm_password} />
                                    <ErrorMessage
                                        errors={errors}
                                        name="confirm_password"
                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
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
