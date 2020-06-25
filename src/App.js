
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {reactLocalStorage} from 'reactjs-localstorage';
import Title from './components/Title.js';
import LeadText from './components/LeadText.js';
import CreateForm from './components/CreateForm.js';
import CreateOutsideButton from './components/CreateOutsideButton.js';
import CreateDisplayDiv from './components/CreateDisplayDiv.js';

function App() {
    var [items, setItems] = React.useState(JSON.parse(reactLocalStorage.get('quotes', null)));
    var listShowing = false;

    const updateList = () => {
        setItems(JSON.parse(reactLocalStorage.get('quotes', null)));
    };

    const deleteItem = id => {
        var it = items.filter(function(item){
            return item.id !== id;
        });

        setItems(it);
        localStorage.setItem('quotes', JSON.stringify(it));
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
              <CreateDisplayDiv id={"quoteList"} items={items} deleteItem={deleteItem}/>
              </div>
          </div>

      </div>
    );
}

export default App;
