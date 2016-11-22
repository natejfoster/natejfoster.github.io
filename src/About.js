import React from 'react';
import './css/About.css';
import $ from 'jquery';

var About = React.createClass({

	getInitialState() {
		return{text:""}
	},

	componentDidMount() {
		$.get('./data/about.txt').then(function(data) {
			this.setState({text:data})
		}.bind(this));
	},

	render() {
		return (
			<div>
				<div className="About">
					<h4>Bio</h4>
					<div>
						<img className="img-profile" src="./imgs/profile.jpg"/>
					</div>
					<p>{this.state.text}</p>
					<br></br>
					<h4>Contact</h4>
					<a href="mailto:njfoster@uw.edu" role="button" aria-label="send a message"><i className="fa fa-envelope fa-lg" aria-hidden="true"></i></a>
				</div>
			</div>

		);
	}
});

export default About;
