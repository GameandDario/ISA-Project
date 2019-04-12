import React, { Component } from 'react';
import './App.css';
import MapApi from './components/Map/Mapapi';
import 'bootstrap/dist/css/bootstrap.css';
import './components/Map/Map.css';
import Stream from './components/Stream/Stream';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapApi />
        <Stream />
      </div>
    );
  }
}

export default App;
