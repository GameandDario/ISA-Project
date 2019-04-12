import React, { Component } from 'react';
import Stream from './components/Stream/Stream';
import MapApi from './components/Map/Mapapi';

import 'bootstrap/dist/css/bootstrap.css';
import './components/Map/Map.css';
import './App.css';

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
