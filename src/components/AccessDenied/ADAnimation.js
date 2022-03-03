import React from "react";
import Lottie from 'react-lottie-player';
import lottieJson from './animation.json'



export default function ADAnimation() {
    return (
        <>
            <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 200, height: 200, margin: 'auto' }}
            />
            <p style={{ width: 250, height: 200, margin: 'auto' }} >Requested Action Permissions Denied</p>
        </>
    );
}

