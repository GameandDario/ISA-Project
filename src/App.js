import React, { Component } from 'react';
import './App.css';
import MapApi from './components/Map/Mapapi';
import 'bootstrap/dist/css/bootstrap.css';
import './components/Map/Map.css';
import Stream from './components/Stream/Stream';

// import par stef
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header/Header';
import IssMarker from './components/Issmarker/IssMarker';
import BackGroundTest from './components/BackgroundTest/BackGroundTest';
library.add(faEnvelope, faKey, faSun, faMoon);

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapApi />
        <Header />
        <BackGroundTest />
        <IssMarker />
        <Stream />
      </div>
    );
  }
}

export default App;
