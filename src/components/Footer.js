import React from 'react';
import sqlicon from '../assets/mysql.svg';
//import mongoicon from '../assets/mongodb.png';
// import file from '../assets/CentersResume.pdf';

function Footer() {
	return (
		<div className='container'>
			<div className='row justify-content-md-center'>
				<div className='col-lg-1 text-center'>
					<i className='fab fa-html5 fa-3x'></i>
				</div>
				<div className='col-lg-1 text-center'>
					<i className='fab fa-css3-alt fa-3x'></i>
				</div>
				<div className='col-lg-1 text-center'>
					<i className='fab fa-js-square fa-3x'></i>
				</div>
				<div className='col-lg-1 text-center'>
					<i className='fab fa-adobe fa-3x'></i>
				</div>
				<div className='col-lg-1 text-center'>
					<img src={sqlicon} alt='mysql' width='50' height='50' />
				</div>
				<div className='col-lg-1 text-center'>
					<i className='fab fa-node fa-3x'></i>
				</div>
				<div className='col-lg-1 text-center'>
					<i className='fab fa-react fa-3x'></i>
				</div>
			</div>

			<div className='row'>
				<div className='col-md-4 text-center'></div>
				<div className='col-md-4 text-center'>
					<br />
					<hr />
					<h5>CONNECT WITH ME</h5>
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
						<a
							href='https://kristincenters.github.io/assets/CentersResume.pdf'
							className='btn btn-outline-secondary'
						>
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
