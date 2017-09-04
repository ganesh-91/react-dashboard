import React, { Component } from 'react';
import logo from './logo.svg';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Header from "./components/header/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Header />
      </div >
    );
  }
  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");
    var ref = this.refs[data];
    debugger;
    var el = {
      tagName: ref.tagName.toLowerCase(),
      type: ref.type,
      className: ref.className,
      id: ref.id
    };
    var elReact = React.createElement(el.tagName, el);
    this.setState({ obj: this.state.obj.concat(elReact) });
    // ReactDOM.render(elReact, document.getElementById("app1"));
    this.state.obj;
  }
}

export default App;
