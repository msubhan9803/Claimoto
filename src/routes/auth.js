//Components
import Register from "views/pages/Register/Register"
import Login from "views/pages/Login/Login"
import EmailSend from "views/pages/EmailSend/EmailSend"
import EmailVerify from "views/pages/EmailVerify/EmailVerify"
import TermsCondition from "views/pages/TermsCondition/TermsCondition"
import ResetPassword from "views/pages/ResetPassword/ResetPassword"
import RestPassEmail from "views/pages/ResetPassEmail/ResetPassEmail"
import NewPassword from "views/pages/NewPassword/NewPassword"
import PasswordSetSuccess from "views/pages/PasswordSetSucc/PasswordSetSucc"


export const AuthRoutes = () => {
    return [
        {
            path: "/",
            component: <Register />,
            layout: "/",
        },
        {
            path: "/login",
            component: <Login />,
            layout: "/",
        },
        {
            path: "/verifyEmail",
            component: <EmailSend />,
            layout: "/",
        },
        {
            path: "/verifySuccess",
            component: <EmailVerify />,
            layout: "/",
        },
        {
            path: "/termsCondition",
            component: <TermsCondition />,
            layout: "/",
        },{
            path: "/resetPassword",
            component: <ResetPassword />,
            layout: "/",
        },{
            path: "/resetPasswordEmail",
            component: <RestPassEmail />,
            layout: "/",
        },{
            path: "/newPassword",
            component: <NewPassword />,
            layout: "/",
        },
        {
            path: "/passwordSuccess",
            component: <PasswordSetSuccess />,
            layout: "/",
        },
    ];
};
