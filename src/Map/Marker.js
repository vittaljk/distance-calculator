import React from 'react';
import { Marker } from 'react-map-gl';
import pin from '../assets/pin.svg';

function MarkerGL(props) {
    const { lat, lng } = props;

    return (
        <Marker longitude={lng} latitude={lat}>
            <img src={pin} alt="User selction on map" />
        </Marker>
    )
}

export default MarkerGL