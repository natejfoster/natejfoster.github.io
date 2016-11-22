import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

var ProjectCard = React.createClass({
  render() {
    return (
      <div className="projectCard center">
        <Card>
          <CardMedia>
            <img src={this.props.img} />
          </CardMedia>
          <CardTitle title={this.props.name} subtitle={this.props.subtitle} />
          <CardText>
            {this.props.desc}
          </CardText>
          <CardActions>
            <a href={this.props.url} target="_blank"><FlatButton label="Link to Site" /></a>
          </CardActions>
        </Card>
      </div>
    )
  }
})


export default ProjectCard;
