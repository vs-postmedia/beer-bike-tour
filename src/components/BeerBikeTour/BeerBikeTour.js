import React, { Component } from 'react';
import CircleMap from '../CircleMap/CircleMap';

// points & routes for map
import mapPoints from '../../data/breweries-geo.json';
import mainRoute from '../../data/main-route.json';
import eastRoute from '../../data/east-route.json';
import dtRoute from '../../data/dt-route.json';


const mapRoutes = [
	{
		route: mainRoute, 
		colour: 'orange'
	},
	{
		route: eastRoute,
		colour:  'darkmagenta'
	},
	{
		route: dtRoute,
		colour: 'steelblue'
	}
];


// map tiles & attribution
const map_url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy;<a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors';


export class BeerBikeTour extends Component {
	map_options = {
		center: [49.266943, -123.106182],
		maxZoom: 18,
		minZoom: 12,
		zoom: 15
	}

	render() {
		return (
			<CircleMap id="root"
				attribution={attribution}
				center={this.map_options.center}
				circleMarkerClassField={this.map_options.classField}
				routes={mapRoutes}
				points={mapPoints}
				maxZoom={this.map_options.maxZoom}
				minZoom={this.map_options.minZoom}
				tiles={map_url}
				zoom={this.map_options.zoom}>
			</CircleMap>
		);
	}
}

export default BeerBikeTour;