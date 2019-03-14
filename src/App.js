import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { Button } from 'antd-mobile';
import logo from './logo.svg';
import './App.css';


@inject("store")
@observer
class App extends Component {
  constructor(props) {
		super(props);
    this.store = this.props.store;
	}
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button>gwen is wendy</Button>
          <span>
            {this.store.appState.testval}
          </span>
        </header>
      </div>
    );
  }
}

export default App;
