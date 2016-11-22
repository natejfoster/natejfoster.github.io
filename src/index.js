import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import './css/index.css';
import Projects from './Projects';
import LandingPage from './LandingPage';
import About from './About'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={LandingPage}/>
                <Route path="projects" component={Projects}/>
                <Route path="about" component={About}/>
            </Route>
        </Router>
    </MuiThemeProvider>,
  document.getElementById('root')
);
