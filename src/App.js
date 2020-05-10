import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header(header) {
    return (<h1 className="d-4">{header.value}</h1>);
}

function Title(text){
  return (<h2 className="display-4">{text.welcomeText}</h2>)
}

function App() {
    return (
        <div className="App">
            <Header value={"Projekt"}/>
            <Title welcomeText={"Become a Pirate!"}/>
        </div>
    );
}

export default App;
