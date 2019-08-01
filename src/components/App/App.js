import React from 'react';
import MapboxMap from '../MapboxMap/MapboxMap';
import './App.css';

import mainRoute from '../../data/main-route.json';


function App() {
	return (
	  	<div className="App">
	  		<h1>React template</h1>
	  		<MapboxMap
	  			layers={[mainRoute]}
	  		></MapboxMap>
	  	</div>
	);
}

export default App;
