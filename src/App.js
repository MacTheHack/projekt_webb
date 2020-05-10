import React from 'react';
import logo from './logo.svg';
import './App.css';

function Title(text){
  return (<h2 className="display-4">{text.welcomeText}</h2>);
}

function CreateForm(){
  return (
    <form className="text-left">
      <div className="form-group">
        <label for="inputText">Text to convert:</label>
        <textarea type="text" className="form-control" id="inputText" placeholder="Text to convert"></textarea>
      </div>
    </form>
  );
}

function CreateButton(button){
  return( <button className="btn btn-info btn-block" id={button.id}>{button.text}</button>)
}

function App() {
    return (
        <div className="App">
            <Title welcomeText={"Become a Pirate!"}/>
            <div className="container">
                <CreateForm/>
                <CreateButton id={"convert"} text={"Convert"}/>
            </div>
        </div>

    );
}

export default App;
