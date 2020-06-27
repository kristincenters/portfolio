import React from 'react';
// import file from '../assets/CentersResume.pdf';

function Footer() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-4 text-center'></div>
				<div className='col-md-4 text-center'>
					<h5>CONNECT WITH ME</h5>
					<br />
					<a href='https://www.linkedin.com/in/kristincenters'>
						<i className='fab fa-linkedin fa-2x' style={{ color: '#585858' }}>
							{'\u00A0'}
							{'\u00A0'}
						</i>
					</a>
					<a href='https://github.com/kristincenters'>
						<i className='fab fa-github fa-2x' style={{ color: '#585858' }}>
							{'\u00A0'}
							{'\u00A0'}
						</i>
					</a>
					<a href='https://twitter.com/kmcenters'>
						<i className='fab fa-twitter fa-2x' style={{ color: '#585858' }}>
							{'\u00A0'}
							{'\u00A0'}
						</i>
					</a>
				</div>
				<div className='col-md-2 text-center'></div>
			</div>
			<br />
			<div className='row'>
				<div className='col-md-12 text-center'>
					<h5>
						<a href='./assets/CentersResume.pdf' style={{ color: '585858' }}>
							DOWNLOAD RESUME
						</a>
						<br />
						<br />
					</h5>
				</div>
			</div>

			<div className='row'>
				<div className='col-md-12 text-center' style={{ color: '#585858' }}>
					Made by Kristin &copy; 2020
				</div>
			</div>
		</div>
	);
}
export default Footer;
