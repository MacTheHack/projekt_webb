import React from 'react';

class CreateOutsideButton extends React.Component{
  render(){
    return(<button className="btn btn-primary" style={this.props.style} id={this.props.id} onClick={this.props.onClick}>{this.props.text}</button>)
  }
}

export default CreateOutsideButton;
