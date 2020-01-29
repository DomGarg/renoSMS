import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import AddForm from './components/AddForm';
import gif from './assets/renoman.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: ""
    };
    //this.remove = this.remove.bind(this);
    this.add = this.add.bind(this);
  }

  add(key, value, skill) {
    this.setState({ isLoaded: false }, () => {
      fetch('https://dgargala.lib.id/notyet@dev/addOneNumber/?name=' + key + '&number=' + value + '&skill=' + skill)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
            }, () => {
            console.log(this.state);
          });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error: error,
            });
          }
        );
    });

  }




  render() {
    return (
      <div id="app-background">
        <h1 id="header-text">renoSMS - Increase your chances of finding new customers!</h1>

        <div id="app-body">
          <div id="app-gif">
            <img id="gif" src={gif} />
          </div>
          <div id="app-add">
            <div id="app-slogan">
              <h2 id="slogan">Sign up below!</h2>
            </div>
            <AddForm addCallback={this.add} />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;