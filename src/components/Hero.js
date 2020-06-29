import React from 'react';
import backgroundImg from '../assets/portfolio_background-01.svg';

const styles = {
	jumbotron: {
		backgroundImage: `url(${backgroundImg})`,
		backgroundRepeat: 'noRepeat',
		color: '#202020',
		borderRadius: '0px',
		backgroundSize: 'cover',
		padding: '25px',
	},
};

function Hero() {
	return (
		<div style={styles.jumbotron}>
			<img
				src='https://kristincenters.github.io/assets/images/kmc%20copy.jpg'
				className='img-fluid rounded-circle border border-white d-block mx-auto'
				alt='Kristin Centers'
			/>
			<h1 className='display-5 text-center'>Coder. Content. Creative.</h1>
			<p className='lead text-center'>
				I've enjoyed a successful career in the field of corporate
				communications
				<br /> with an emphasis on digital content and graphic design, and now,
				I am taking a deep dive into web design and development.{' '}
			</p>
		</div>
	);
}

export default Hero;
