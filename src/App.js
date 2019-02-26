import React, { Component } from 'react';
import './App.css';
import TopMenu from "./TopMenu";
import OrderPage from "./OrderPage"

class App extends Component {
  render() {
    return (
      <div className="App">
      <TopMenu/>
      <OrderPage/>
      </div>
    );
  }
}

export default App;
