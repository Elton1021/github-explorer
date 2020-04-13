import React, { Component } from 'react';
import './App.css';
import Navbar from './component/layouts/Navbar';
import Search from './component/layouts/Search';
import Users from './component/users/Users';
import axios from 'axios';

class App extends Component {
  state = {
    users:[],
  }

  changeState = (users) =>{
    if(users === "")
      axios.get('https://api.github.com/users').then(result=>this.setState({users:result.data}));
    else
      axios.get('https://api.github.com/users/'+users).then(result=>this.setState({users:[result.data]}));
  }

  componentDidMount(){
    axios.get('https://api.github.com/users').then(result=>this.setState({users:result.data}));
  }

  render(){
    return (
      <div className="App">
        <Navbar title="GitHub Explorer" icon="fa fa-github">
          <Search changeState={this.changeState} placeholder="Search for Users, Projects.." buttonIcon = "fa fa-search" value={this.state.value}/>
        </Navbar>
        <Users users={this.state.users}/>
      </div>
    );
  }
}

export default App;
