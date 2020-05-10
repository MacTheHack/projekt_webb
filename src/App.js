import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header(header) {
    return (<h1 className="d-4">{header.value}</h1>);
}

function Title(text){
  return (<h2 className="display-4">{text.welcomeText}</h2>);
}

function CreateForm(){
  return (
    <form>
      <div className="form-group">
        <label for="inputText">Text to convert:</label>
        <textarea type="text" className="form-control" id="inputText" placeholder="Text to convert"></textarea>
      </div>
    </form>
  );
}

function CreateButton(button){
  return( <button className="btn btn-info" id={button.id}>{button.text}</button>)
}

function App() {
    return (
        <div className="App">
            <Header value={"Projekt"}/>
            <Title welcomeText={"Become a Pirate!"}/>
            <CreateForm/>
            <CreateButton id={"convert"} text={"Convert"}/>
        </div>

    );
}

export default App;
