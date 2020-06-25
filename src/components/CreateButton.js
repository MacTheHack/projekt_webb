import React from 'react';

class CreateButton extends React.Component{
  render(){
    return( <button className="btn btn-info btn-block my-3" style={this.props.style} id={this.props.id}>{this.props.text}</button>)
  }
}

export default CreateButton;
