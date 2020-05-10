import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header(header) {
    return (<h1 class="d-4">{header.value}</h1>);
}

function App() {
    return (
        <div className="App">
            <Header value={"Projekt"}/>
        </div>
    );
}

export default App;
