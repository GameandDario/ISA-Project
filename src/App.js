import React, { Component } from 'react';
import './App.css';
import MapApi from './components/Map/Mapapi';
import 'bootstrap/dist/css/bootstrap.css';
import './components/Map/Map.css';
import Stream from './components/Stream/Stream';
import Footer from './components/Footer/footer';

// import par stef
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header/Header';
library.add(faEnvelope, faKey, faSun, faMoon);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MapApi />
        <Stream />
        <Footer />
      </div>
    );
  }
}

export default App;
