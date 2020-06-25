import React from 'react';

class LeadText extends React.Component{
  render(){
    return (<p className="lead">{this.props.text}</p>);
  }
}

export default LeadText;
