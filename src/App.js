import React, { Component } from 'react';
import Stream from './components/Stream/Stream';
import MapApi from './components/Map/Mapapi';
import Footer from './components/Footer/footer';
import Header from './components/Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './components/Map/Map.css';
library.add(faEnvelope, faKey, faSun, faMoon);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MapApi />
        <Stream />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
