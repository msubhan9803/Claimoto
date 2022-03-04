import React from "react";
import Lottie from 'react-lottie-player';
import lottieJson from 'variables/Animations/loader_animation.json'



export default function LoaderAnimation() {
    return (
        <>
            <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 200, height: 200, margin: 'auto' }}
            />
        </>
    );
}

