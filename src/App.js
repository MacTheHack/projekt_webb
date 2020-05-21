import React from 'react';
import logo from './logo.svg';
import './App.css';

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
  return(<button className="btn btn-primary" style={button.style}   id={button.id}>{button.text}</button>)
}

function CreateButton(button){
  return( <button className="btn btn-info btn-block my-3" style={button.style} id={button.id}>{button.text}</button>)
}

function CreateDisplayDiv(props){
    const items = props.items;
    const listItems = items.map((item) =>
        <ListItem key={item.toString()} value={item} />
    );
    return(<ul className="list-group" style={props.style} id={props.id}>{listItems}</ul>)
}

function ListItem(props) {
  return <li>{props.value}</li>;
}

const numbers = [1, 2, 3, 4, 5];
function App() {
    return (
        <div className="App">
            <Title welcomeText={"Become a Pirate!"}/>
            <LeadText text={"Take the first step to become a pirate.This webiste helps you to convert plain old boring English to cool pirate language"}/>
            <div className="container">
                <CreateForm/>
                <CreateOutsideButton style={{float:'left'}} id={"saveQuote"} text={"Save this quote"}/>
                <CreateOutsideButton style={{float:'right'}} id={"displayQuotes"} text={"Display your quotes"}/>
                <CreateDisplayDiv style={{float:'right'}} id={"quoteList"} items={numbers}/>

            </div>
        </div>
    );
}

export default App;
