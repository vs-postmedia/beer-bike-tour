import React, { Component } from 'react';
import { Map, TileLayer, Polyline } from 'react-leaflet';
import MapboxGLLayer from '../MapboxGLLayer/MapboxGLLayer';
import BreweryMarker from '../BreweryMarker/BreweryMarker';
import MapStyle from '../../data/map-style-basic-v8.json';

import './CircleMap.css';
import MAPBOX_TOKEN from '../../data/mapbox-token';


export class CircleMap extends Component {
	componentDidMount() {

	}

	render() {
		return (
			<Map 
				center={this.props.center} 
				zoom={this.props.zoom}>
		
				<MapboxGLLayer
					accessToken={MAPBOX_TOKEN}
					// style='mapbox://styles/mapbox/streets-v9'/>
					style={MapStyle}/>

					{
						this.props.routes.map(d => {
							return (<Polyline color={d.colour} key={d.route} positions={d.route} />)
						})
					}
					{
						this.props.points.map(d => {
							return (
								<BreweryMarker data={d} key={d.name.replace(/\s/g, '-')}></BreweryMarker>
							)
						})
					}
			</Map>
		);
	}
}


export default CircleMap;

/*
<MapboxGLLayer
	accessToken={MAPBOX_TOKEN}
	style='mapbox://styles/mapbox/streets-v9'/>

<TileLayer url={this.props.tiles} 
	attribution={this.props.attribution} 
	maxZoom={this.props.maxZoom}
	minZoom={this.props.minZoom}/>

*/