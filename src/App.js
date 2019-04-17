import React, { Component } from 'react';
import './App.css';
import MapApi from './components/Map/Mapapi';
import 'bootstrap/dist/css/bootstrap.css';
import './components/Map/Map.css';
import Stream from './components/Stream/Stream';
import AboutUs from './components/About/aboutUs';
import ModalExample from './components/Form/modalForm';
import Footer from './components/Footer/footer';

// import par stef
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header/Header';
import IssMarker from './components/IssMarker/IssMarker';
import BackGroundTest from './components/BackgroundTest/BackGroundTest';
library.add(faEnvelope, faKey, faSun, faMoon);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MapApi />
        <BackGroundTest />
        <IssMarker />
        <Stream />
        <AboutUs />
        <ModalExample />
        <Footer />
      </div>
    );
  }
}

export default App;
