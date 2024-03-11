import React from 'react';
import { Layer, Source } from 'react-map-gl';

function Line(props) {
    const { points } = props;

    return (
        <Source id="lineSource" type="geojson" data={{
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'LineString',
                coordinates: points.map(point => [point.lng, point.lat])
            }
        }}>
            <Layer
                id="lineLayer"
                type="line"
                source="lineSource"
                layout={{
                    'line-cap': 'round',
                    'line-join': 'round'
                }}
                paint={{
                    'line-color': 'blue',
                    'line-width': 2
                }}
            />
        </Source>
    )
}

export default Line