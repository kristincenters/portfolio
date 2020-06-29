import React from 'react';

const styles = {
	cardTitle: {
		margin: '10px',
		padding: '15px',
		textAlign: 'center',
		verticalAlign: 'middle',
		fontFamily: 'Roboto',
	},
	cardLink: {
		color: 'gray',
		textAlign: 'center',
	},
	cardFooter: {
		backgroundColor: '#6aa5a5',
		color: '#686868',
	},
};

function ProjectCard(props) {
	return (
		<div className='card'>
			<div className='img-container'>
				<a href={props.cardLink}>
					<img className='card-img-top' src={props.cardImg} alt={props.title} />
				</a>
				<div className='card-body'>
					<h5 className={styles.cardTitle}>{props.title}</h5>
					<p className='card-white'>{props.description}</p>
					<a
						className={styles.cardLink}
						target='_blank'
						rel='noopener noreferrer'
						href={props.siteLink}
					>
						:: VIEW SITE
					</a>
					<a
						className={styles.cardLink}
						target='_blank'
						rel='noopener noreferrer'
						href={props.codeLink}
					>
						:: VIEW CODE
					</a>
				</div>
			</div>
			<div className={styles.cardFooter}>
				<small className='text-white'>{props.cardFooter}</small>
			</div>
		</div>
	);
}

export default ProjectCard;
