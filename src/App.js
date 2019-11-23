import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
//import UserList from './components/UserList';
import AddForm from './components/AddForm';
import Footer from './components/Footer';
import gif from './assets/phone.gif';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      //userList: [],
      error: ""
    };
    //this.remove = this.remove.bind(this);
    //this.add = this.add.bind(this);
  }



  render() {
    return (
      <div id="app-background">
        <h1 id="header-text">renoSMS</h1>
        <div id="app-body">
          <div id="app-gif">
            <img id="gif" src={gif} />
          </div>
          <div id="app-add">
            <div id="app-slogan">
              <h2 id="slogan">All home renovation quotes just by sending an SMS!</h2>
            </div>
            <AddForm addCallback={this.add} />
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }
}
export default App;
