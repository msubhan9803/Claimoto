import React, { useEffect, useRef } from "react";

function MapComponent({
    center,
    zoom,
}) {
    const ref = useRef();

    useEffect(() => {
        new window.google.maps.Map(ref.current, {
            center,
            zoom,
        });
    });

    return <div style={{height:window.screen.height}} ref={ref} id="map" />;
}


export default MapComponent;

