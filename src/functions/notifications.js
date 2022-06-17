import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";

const NotificationRedirect = ({redirect_url}) => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(redirect_url);
    }, [redirect_url])

    return (
        <h1>Hello</h1>
    );
}

export default NotificationRedirect;