import React from 'react';
import headshot from '../assets/kmc.1.jpg';

function Hero() {
	return (
		<div className='jumbotron text-center'>
			<img
				src={headshot}
				className='img-fluid rounded-circle border border-white'
				alt='Kristin Centers'
			/>
			<h1 className='display-5'>Coder. Content. Creative.</h1>
			<p className='lead'>
				I've enjoyed a successful career in the field of corporate
				communications with an emphasis on digital content and graphic design,
				and now, I am taking a deep dive into web design and development.{' '}
			</p>
		</div>
	);
}

export default Hero;
