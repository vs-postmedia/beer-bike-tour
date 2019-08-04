import React from 'react';
import BeerBikeTour from '../BeerBikeTour/BeerBikeTour';
import './App.css';


// get lat/lon/zoom params from the URL
const params = new URLSearchParams(window.location.search);

function App() {
	return (
	  	<div className="App">
	  		<BeerBikeTour params={params}></BeerBikeTour>
	  	</div>
	);
}

export default App;


// East route: zoom=14&lat=49.280521&lon=-123.075
// Main route: defaults
// Downtown route: /?zoom=14&lat=49.280521&lon=-123.1075