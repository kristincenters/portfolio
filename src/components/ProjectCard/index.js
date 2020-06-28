import React from 'react';
//import cardimg1 from '../assets/graphic-headers-01.svg';

function ProjectCard(props) {
	return (
		<div className='card'>
			<div className='img-container'>
				<a href={props.cardLink}>
					<img className='card-img-top' src={props.cardImg} alt={props.title} />
				</a>
				<div className='card-body'>
					<h5 className='card-title'>{props.title}</h5>
					<p className='card-white'>{props.description}</p>
					<a
						className='card-link'
						target='_blank'
						rel='noopener noreferrer'
						href={props.siteLink}
					>
						:: VIEW SITE
					</a>
					<a
						className='card-link'
						target='_blank'
						rel='noopener noreferrer'
						href={props.codeLink}
					>
						:: VIEW CODE
					</a>
				</div>
			</div>
			<div className='card-footer'>
				<small className='text-white'>{props.cardFooter}</small>
			</div>
		</div>
	);
}

export default ProjectCard;
