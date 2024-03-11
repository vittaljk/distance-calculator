import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState } from 'react';
import MapGL from 'react-map-gl';
import Distance from './Distance';
import Line from './Line';
import MarkerGL from './Marker';


function Map() {
    const [points, setPoints] = useState([]);

    function handleMapClick(event) {
        const { lng, lat } = event.lngLat;
        setPoints([...points, { lng, lat }]);
    };
    return (
        <MapGL
            mapLib={import('mapbox-gl')}
            initialViewState={{
                longitude: -100,
                latitude: 40,
                zoom: 3.5
            }}
            style={{ width: '100vw', height: '100vh' }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onClick={handleMapClick}
        >
            {/* point marks */}
            {points.map((point, index) => (
                <React.Fragment key={index}>
                    <MarkerGL key={index} lat={point.lat} lng={point.lng} />
                    {index < points.length - 1 ? (
                        <Distance point1={point} point2={points[index + 1]} />
                    ): null}
                </React.Fragment>
            ))}

            {/* line b/w points */}
            <Line points={points} />
        </MapGL>
    )
}

export default Map;