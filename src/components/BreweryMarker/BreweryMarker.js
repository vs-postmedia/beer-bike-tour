import React from 'react';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import NumberIcon from '../NumberIcon/NumberIcon';
import { CircleMarker, Marker, Tooltip } from 'react-leaflet';


import './BreweryMarker.css';

const BreweryMarker = (props) => {
	const data = props.data;

	// adjust xposition depending on number of digits
	const xpos = data.order > 9 ? '18%' : '35%';

	// custom icon with number in centre
	// See: https://medium.com/@nikjohn/creating-a-dynamic-jsx-marker-with-react-leaflet-f75fff2ddb9
	const customIcon = <NumberIcon 
		number={data.order} 
		className={data.group} 
		size='28' 
		xpos={xpos} ypos='69%'/>

	const numberIcon = new L.divIcon({
		className: 'custom-icon',
		html: ReactDOMServer.renderToString(customIcon)
	});

	return (
		<Marker
			position={[data.lat, data.lon]}
			icon={numberIcon}>
			<Tooltip>
				<h2>{data.name}</h2>
				<p>{data.address.split(' VANCOUVER')[0].to}</p>
				<p>{`Order: ${data.order}`}</p>
				<p>{data.latlon}</p>
			</Tooltip>
         </Marker>
	);
}

export default BreweryMarker;