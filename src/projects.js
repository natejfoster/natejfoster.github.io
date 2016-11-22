import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import './css/project.css';
import $ from 'jquery';

var Projects = React.createClass({
	getInitialState(){
		return{projects:[]}
	},

	componentDidMount() {
		console.log("made it here");
		$.getJSON('./data/sites.json', function(result)  {
			console.log(result.sites);
			this.setState({projects:result.sites});
		}.bind(this))

	},

	render() {
		console.log(this.state.projects);
		return (
			<div className="center">
				<div>
					{this.state.projects.map(function(p, i){
						return (<ProjectCard key={'p-' + i}
							name={p.name}
							url={p.url}
							desc={p.desc}
							img={p.img}
							subtitle={p.subtitle}
							className="projectCard"
							/>)
						})}
				</div>
			</div>
		);
	}
});

export default Projects;
