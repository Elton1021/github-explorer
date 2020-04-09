import React, { Component } from 'react';
import './App.css';
import Navbar from './component/layouts/Navbar';
import Search from './component/layouts/Search';

class App extends Component {
  state = {
    value : '',
  }
  render(){
    return (
      <div className="App">
        <Navbar title="GitHub Explorer" icon="fa fa-github">
          <Search placeholder="Search for Users, Projects.." buttonIcon = "fa fa-search" value={this.state.value}/>
        </Navbar>
      </div>
    );
  }
}

export default App;
