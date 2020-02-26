import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import List from './components/List';
import Note from './components/Note';
import axios from 'axios';

class App extends Component {
  constructor(){
    // it invokes super class components. 
    super();
    /*this.state sets default state when the application is first loaded*/
    this.state ={
      // give this object
      showNote: false
    };
  }

  toggleNote = () => {
    this.setState({
      showNote: ! this.state.showNote
    });
  }

  getNotes = () => {
    axios.get('https://note-app-sora-doh.herokuapp.com/notes')
    .then((res) => console.log(res.data));
    // .catch((err) => console.log(err.response.data));
  }

  render(){
    const {showNote } = this.state;

    return (
    <div className="App">
      <Nav toggleNote ={ this.toggleNote} showNote={showNote}/>
      { showNote ? <Note /> : <List getNotes = {this.getNotes} />}
    </div>
  );
}
}

export default App;
