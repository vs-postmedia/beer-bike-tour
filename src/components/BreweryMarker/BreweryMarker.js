import React from 'react';
import { Marker } from 'react-map-gl';

const BreweryMarker = (props) => {
	console.log(props.data)
	const data = props.data;

	return (
		<Marker
			latitude={data.lat}
			longitude={data.lon}
		>
				<p>{data.order}</p>
		</Marker>
	);
}

export default BreweryMarker;