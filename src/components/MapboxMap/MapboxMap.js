import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import { fromJS } from 'immutable';
import {defaultMapStyle, dataLayer} from './MapStyle.js';
import BreweryMarker from '../BreweryMarker/BreweryMarker';

import data from '../../data/main-route.json';
import breweries from '../../data/breweries-geo.json';

import MAPBOX_TOKEN from '../../data/mapbox-token';

import './MapboxMap.css';
import 'mapbox-gl/dist/mapbox-gl.css';

export class MapboxMap extends Component {
	state = {
		viewport: {
			width: 400,
			height: 400,
			latitude: 49.2437158,
			longitude: -123.1072998,
			// latitude: 37.830348,
			// longitude: -122.486052,
			zoom: 12
		}
	};

	componentDidMount() {
		const mapStyle = defaultMapStyle
			.setIn(['sources', 'main_route'], fromJS({'type': 'geojson', data }))
			.set('layers', defaultMapStyle.get('layers').push(dataLayer));

		this.setState({
			mapStyle: mapStyle
		});
	}


	render() {
		const mapStyle = this.state.mapStyle

		return (
			<div id="map-wrapper">
			 <ReactMapGL
			 	{...this.state.viewport}
			 	mapboxApiAccessToken={MAPBOX_TOKEN}
			 	mapStyle={mapStyle}
			 	onViewportChange={(viewport) => this.setState({viewport})}
			 	ref='map'
			 />
			 	{
			 		breweries.map(d => {
			 			return <BreweryMarker data={d} key={d.name.toLowerCase().replace(/\s/g, '-')} ></BreweryMarker>
			 		})
			 	}
			 </div>
		);
	}
}

export default MapboxMap;