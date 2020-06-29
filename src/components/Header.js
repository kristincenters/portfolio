import React from 'react';

const styles = {
	navText: {
		fontFamily: 'Euphoria Script',
		color: '#484848',
		fontSize: '38px',
	},
};

function Header() {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-muted'>
			<div className='container'>
				<img
					src='https://kristincenters.github.io/assets/images/kc_logo-01.svg'
					alt='KC logo'
				/>
				<h2 className={styles.navText}>Kristin Centers</h2>
			</div>
		</nav>
	);
}

export default Header;
