import React from 'react';
import logo from '../assets/kc_logo-01.svg';

function Header() {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-muted'>
			<div className='container'>
				<img src={logo} alt='KC logo' />
				<h2 className='navText'>Kristin Centers</h2>
			</div>
		</nav>
	);
}

export default Header;
