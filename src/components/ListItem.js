import React from 'react';
class ListItem extends React.Component {
  render(){
    return(
    <li className="list-group-item list-group-item-success">
      {this.props.value}
      <img src="img/delete.webp" alt="delete" width="25px" onClick={this.props.deleteItem}/>
    </li>);
  }
}

export default ListItem
