import React from 'react';

class Title extends React.Component{
  render(){
    return (<h2 className="display-4">{this.props.welcomeText}</h2>);
  }
}

export default Title;
