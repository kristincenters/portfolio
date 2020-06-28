import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard/index';
import Footer from './components/Footer';
import projects from './projects.json';
//import cardImg1 from './assets/graphic-headers-01.svg';

function App() {
	return (
		<div>
			<Header />
			<Hero />
			<br />
			<br />
			<div className='container'>
				<div className='card-deck'>
					<ProjectCard
						title={projects[0].title}
						description={projects[0].description}
						cardImg={projects[0].cardImg}
						siteLink={projects[0].siteLink}
						codeLink={projects[0].codeLink}
						cardFooter={projects[0].cardFooter}
					/>
					<ProjectCard
						title={projects[1].title}
						description={projects[1].description}
						cardImg={projects[1].cardImg}
						siteLink={projects[1].siteLink}
						codeLink={projects[1].codeLink}
						cardFooter={projects[1].cardFooter}
					/>
					<ProjectCard
						title={projects[2].title}
						description={projects[2].description}
						cardImg={projects[2].cardImg}
						siteLink={projects[2].siteLink}
						codeLink={projects[2].codeLink}
						cardFooter={projects[2].cardFooter}
					/>
				</div>
			</div>
			<br />
			<br />
			<div className='container'>
				<div className='card-deck'>
					<ProjectCard
						title={projects[3].title}
						description={projects[3].description}
						cardImg={projects[3].cardImg}
						siteLink={projects[3].siteLink}
						codeLink={projects[3].codeLink}
						cardFooter={projects[3].cardFooter}
					/>
					<ProjectCard
						title={projects[4].title}
						description={projects[4].description}
						cardImg={projects[4].cardImg}
						siteLink={projects[4].siteLink}
						codeLink={projects[4].codeLink}
						cardFooter={projects[4].cardFooter}
					/>
					<ProjectCard
						title={projects[5].title}
						description={projects[5].description}
						cardImg={projects[5].cardImg}
						siteLink={projects[5].siteLink}
						codeLink={projects[5].codeLink}
						cardFooter={projects[5].cardFooter}
					/>
				</div>
			</div>
			<br />
			<Footer />
		</div>
	);
}

export default App;
