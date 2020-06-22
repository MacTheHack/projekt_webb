
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {reactLocalStorage} from 'reactjs-localstorage';

function Title(text){
    return (<h2 className="display-4">{text.welcomeText}</h2>);
}

function LeadText(lead){
    return (<p className="lead">{lead.text}</p>);
}

function CreateForm(){
    return (
        <form className="text-left">
            <div className="form-group">
                <label htmlFor="inputText">Text to convert:</label>
                <textarea type="text" className="form-control" id="inputText" placeholder="Text to convert"></textarea>
                <CreateButton id={"convert"} text={"Convert"} />
                <div id="translation" className="border border-dark rounded p-2 d-none"></div>
            </div>
        </form>
    );
}

function CreateOutsideButton(button){
    return(<button className="btn btn-primary" style={button.style} id={button.id} onClick={button.onClick}>{button.text}</button>)
}

function CreateButton(button){
    return( <button className="btn btn-info btn-block my-3" style={button.style} id={button.id}>{button.text}</button>)
}

class CreateDisplayDiv extends React.Component {
  constructor(props){
    super(props)
  }
  handleDelete(number){
    console.log(number);
    let newQuoteList = this.props.items.filter(function(quote){
      return quote.number != number;
    });
  }
  render(){
    var listItems = (this.props.items || []).map(item =>
        <ListItem deleteQuote={this.handleDelete.bind(this)} number={item.id} key={item.id} value={item.text} />
    );
    return(<ul className="list-group d-none" id={this.props.id}>{listItems}</ul>)
  }
}

class ListItem extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.deleteQuote(this.props.number);
  }
  render(){
    return(
    <li className="list-group-item list-group-item-success">
      {this.props.value}
      <img src="img/delete.webp" onClick={this.handleClick} width="25px"/>
    </li>);
  }
}

function App() {
    var [items, setItems] = React.useState(JSON.parse(reactLocalStorage.get('quotes', null)));
    var listShowing = false;

    const updateList = () => {
        setItems(JSON.parse(reactLocalStorage.get('quotes', null)));
    };

    const showList = () => {
        var element = document.getElementById("quoteList");
        if(!listShowing) element.classList.remove("d-none");
        else element.classList.add("d-none");
        listShowing = !listShowing;
    }

    return (
      <div className="App">
          <Title welcomeText={"Become a Pirate!"}/>
          <LeadText text={"Take the first step to become a pirate.This webiste helps you to convert plain old boring English to cool pirate language"}/>
          <div className="container">
              <CreateForm/>
              <CreateOutsideButton style={{margin:'10px'}} id={"saveQuote"} text={"Save this quote"} onClick={updateList}/>
              <CreateOutsideButton style={{margin:'10px'}} id={"displayQuotes"} text={"Show your quotes"} onClick={showList}/>
              <div className="container mt-5">
              <CreateDisplayDiv id={"quoteList"} items={items}/>
              </div>
          </div>

      </div>
    );
}

export default App;
