import React from 'react';
import CreateButton from './CreateButton';

class CreateForm extends React.Component{
  render(){
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
}

export default CreateForm;
