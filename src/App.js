import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react'
import Market from './components/Market'
@observer
class App extends Component {
  render() {

    return (
      <div className="App">
       <Market inventory={this.props.inventory}/>
      </div>
    );
  }
}
export default App;
