import React, { Component } from 'react';
import './App.css';

import Content from "./components/content";
import SideBar from "./components/sideBar";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row no-margin">
          <div className="col-md-2 col-sm-2 col-lg-2 side-bar">
            <SideBar />
          </div>
          <div className="col-md-10 col-sm-10 col-lg-10">
            <Content />
          </div>
        </div>
      </div >
    );
  }
}

export default App;
