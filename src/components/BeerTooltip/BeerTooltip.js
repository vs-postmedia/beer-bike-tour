import React from 'react';
import { Tooltip } from 'react-leaflet';
import './BeerTooltip.css';

const BeerTooltip = (props) => {
	let img;
	const data = props.data;
	// load folder of images
	const images = require.context('../../images', true);
	// set background colour of rating based on rating value
	const className = setBackgroundColor(data.rating);
	// titlecase address
	const address = titleCase(props.data.address.split(' VANCOUVER')[0]);

	// set tooltip image
	if (data.img_title) {
		img = <img src={images(`./${data.img_title}`)} 
			className='tooltip-image' 
			alt={`${data.name}`}/>
	} else {
		img = null;
	}
	
	return (
		<Tooltip className='tooltip' opacity='1'>
			<header>
				<h2 className='name'>{data.name}</h2>
				<div className={`rating-background ${className}`}>
					<h2 className='rating'>{data.rating}</h2>
				</div>
			</header>
			{img}
			<h3>{address.replace(',', '')}</h3>

			<p className='grey02 footer'>Ratings from RateBeer.com</p>
		</Tooltip>
	);
}

function setBackgroundColor(rating) {
	let className;
	if (rating > 75) {
		className = 'green';
	} else if (rating <= 75 && rating > 65) {
		className = 'yellow';
	} else {
		className = 'red';
	}

	return className;
}

function titleCase(str) {
	return str.toLowerCase().replace(/\w\S*/g, function(t) { 
		return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
	});

}

export default BeerTooltip;

/*
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<p>{`Order: ${data.order}`}</p>
<p>{data.latlon}</p>

<div className='rating-container'>
	<p>Rate Beer rating:</p>
	<h4 className='score'>{data.rating}</h4>
</div>


*/