import React, {useEffect} from 'react';
import logo from 'assets/img/logo/logo.png';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ErrorMessage } from "@hookform/error-message";
import { useSelector, useDispatch } from 'react-redux';
import { setForgetPasswordValues, sendResetPasswordEmail } from 'store/actions/auth/forget_password';
import { useNavigate } from 'react-router-dom';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';
import goBack from "assets/img/icons/mc/png/goback.png"

function ResetPassword() {
    const dispatch = useDispatch();
    const { email, loading } = useSelector(state => state.forgetPasswordReducer.values);
    const navigate = useNavigate();
    //Form Validtion
    const formSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is mendatory"),
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
            <div className="body-wrapper">
            <img src={goBack} role="button" className='mt-2' onClick={() => navigate(-1)} />

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
                                    <h1 className="section-title">Let’s reset your Password</h1>
                                    <p>
                                        Enter your Email so we can reset your <br /> password
                                    </p>
                                </div>
                                <form onSubmit={handleSubmit(_onSubmit)} className="ltn__form-box form-width-360">
                                    <input
                                        {...register("email")}
                                        className="mt-3 mb-4"
                                        type="email" onChange={_handleChange} name="email" placeholder="Email" value={email} />
                                    <ErrorMessage
                                        errors={errors}
                                        name="email"
                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                    />

                                    <div className="btn-wrapper mt-0">
                                        {loading ? <LoaderAnimation /> :
                                            <button
                                                className="theme-btn-1 btn btn-block w-100 btn-round-12"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                        }
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

export default ResetPassword
