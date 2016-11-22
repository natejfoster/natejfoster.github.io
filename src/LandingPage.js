import React from 'react';
import './css/Landing.css'

var LandingPage = React.createClass({
    render() {
        return(
            <div className="landing">
                <h1>
                    Nathan J Foster
                </h1>
                <div className="image">
                  <img src="./imgs/profile.jpg"></img>
                </div>
            </div>
        )
    }
});

export default LandingPage;
