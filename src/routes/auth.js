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
            component: <Login />,
            layout: "auth",
        },
        {
            path: "/register",
            component: <Register />,
            layout: "auth",
        },
        {
            path: "/verify_email",
            component: <EmailSend />,
            layout: "auth",
        },
        {
            path: "/verify_success",
            component: <EmailVerify />,
            layout: "auth",
        },
        {
            path: "/terms_condition",
            component: <TermsCondition />,
            layout: "auth",
        }, {
            path: "/reset_password",
            component: <ResetPassword />,
            layout: "auth",
        }, {
            path: "/reset_passwordEmail",
            component: <RestPassEmail />,
            layout: "auth",
        }, {
            path: "/new_password",
            component: <NewPassword />,
            layout: "auth",
        },
        {
            path: "/password_success",
            component: <PasswordSetSuccess />,
            layout: "auth",
        },

    ];
};
