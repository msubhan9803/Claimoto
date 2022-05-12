//Components
import Register from "views/pages/Auth/Register/Register"
import Login from "views/pages/Auth/Login/Login"
import EmailSend from "views/pages/Auth/EmailSend/EmailSend"
import EmailVerify from "views/pages/Auth/EmailVerify/EmailVerify"
import TermsCondition from "views/pages/Auth/TermsCondition/TermsCondition"
import ResetPassword from "views/pages/Auth/ResetPassword/ResetPassword"
import RestPassEmail from "views/pages/Auth/ResetPassEmail/ResetPassEmail"
import NewPassword from "views/pages/Auth/NewPassword/NewPassword"
import PasswordSetSuccess from "views/pages/Auth/PasswordSetSucc/PasswordSetSucc"


export const AuthRoutes = () => {
    return [
        {
            path: "/",
            component: <Login /> ,
            layout: "/",
        },
        {
            path: "/register",
            component: <Register /> ,
            layout: "/",
        },
        {
            path: "/verify_email",
            component: <EmailSend /> ,
            layout: "/",
        },
        {
            path: "/verify_success",
            component: <EmailVerify /> ,
            layout: "/",
        },
        {
            path: "/terms_condition",
            component: <TermsCondition /> ,
            layout: "/",
        }, {
            path: "/reset_password",
            component: <ResetPassword /> ,
            layout: "/",
        }, {
            path: "/reset_password_email",
            component: <RestPassEmail /> ,
            layout: "/",
        }, {
            path: "/new_password",
            component: <NewPassword /> ,
            layout: "/",
        },
        {
            path: "/password_success",
            component: <PasswordSetSuccess /> ,
            layout: "/",
        },

    ];
};