



import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function SessionExpired() {


    const navigate = useNavigate();


    useEffect(() => {
        navigate("/");
    }, []);

    return (
        <h1>Session Expired !</h1>
    )
}

export default SessionExpired;