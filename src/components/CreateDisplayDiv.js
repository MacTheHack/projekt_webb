import React from 'react';
import ListItem from './ListItem.js'
class CreateDisplayDiv extends React.Component{
  render(){
    const listItems = (this.props.items || []).map(item =>{
        const deleteItem = () => this.props.deleteItem(item.id);
        return (<ListItem key={item.id} value={item.text} deleteItem={deleteItem} />)
    }
    );

      return(<ul className="list-group d-none" id={this.props.id}>{listItems}</ul>)
  }
}

export default CreateDisplayDiv;
