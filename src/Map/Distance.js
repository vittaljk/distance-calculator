import React, { useMemo } from 'react';
import { Marker } from 'react-map-gl';
import { calculateDistance } from '../util';

function Distance(props) {
    const { point1, point2 } = props;

    const lng = (point1.lng + point2.lng) / 2;
    const lat = (point1.lat + point2.lat) / 2;
    
    const distance = useMemo(() => calculateDistance(point1, point2), [point1, point2]);

    return (
        <Marker longitude={lng} latitude={lat}>
            <div style={{ backgroundColor: 'white', padding: '4px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>{distance} km</div>
        </Marker>
    )
}

export default Distance