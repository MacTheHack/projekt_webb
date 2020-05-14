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
        <label for="inputText">Text to convert:</label>
        <textarea type="text" className="form-control" id="inputText" placeholder="Text to convert"></textarea>
        <CreateButton id={"convert"} text={"Convert"}/>
        <div id="translation" className="border border-dark rounded p-2 d-none"></div>
      </div>
    </form>
  );
}

function CreateOutsideButton(button){
  return(<button className="btn btn-primary float-left " id={button.id}>{button.text}</button>)
}

function CreateButton(button){
  return( <button className="btn btn-info btn-block my-3" id={button.id}>{button.text}</button>)
}

function App() {
    return (
        <div className="App">
            <Title welcomeText={"Become a Pirate!"}/>
            <LeadText text={"Take the first step to become a pirate.This webiste helps you to convert plain old boring English to cool pirate language"}/>
            <div className="container">
                <CreateForm/>
                <CreateOutsideButton id={"saveQuote"} text={"Save this quote"}/>
            </div>
              
        </div>

    );
}

export default App;
