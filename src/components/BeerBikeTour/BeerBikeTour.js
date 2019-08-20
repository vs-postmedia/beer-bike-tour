import React, { Component } from 'react';
import CircleMap from '../CircleMap/CircleMap';

// points & routes for map
import mapPoints from '../../data/breweries-geo.json';
import mainRoute from '../../data/main-route.json';
import eastRoute from '../../data/east-route.json';
import dtRoute from '../../data/dt-route.json';


const mapRoutes = [{
		route: mainRoute, 
		colour: '#F26B21'
	},
	{
		route: eastRoute,
		colour: '#795b9e'
	},
	{
		route: dtRoute,
		colour: '#0062A3'
}];


// map tiles & attribution
const map_url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy;<a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors';


export class BeerBikeTour extends Component {
	map_options = {
		lat: 49.266943,
		lon: -123.103182,
		maxZoom: 18,
		minZoom: 12,
		zoom: 15
	}

	render() {
		const params = this.props.params
		const lat = params.get('lat') ? parseFloat(params.get('lat')) : this.map_options.lat;
		const lon = params.get('lon') ? parseFloat(params.get('lon')) : this.map_options.lon;
		const zoom = params.get('zoom') ? parseInt(params.get('zoom')) : this.map_options.zoom;

		return (
			<CircleMap 
				attribution={attribution}
				center={[lat, lon]}
				circleMarkerClassField={this.map_options.classField}
				routes={mapRoutes}
				points={mapPoints}
				maxZoom={this.map_options.maxZoom}
				minZoom={this.map_options.minZoom}
				tiles={map_url}
				zoom={zoom}>
			</CircleMap>
		);
	}
}

export default BeerBikeTour;