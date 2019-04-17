import React, { Component } from 'react';
import './App.css';
import MapApi from './components/Map/Mapapi';
import 'bootstrap/dist/css/bootstrap.css';
import './components/Map/Map.css';
import Stream from './components/Stream/Stream';
import AboutUs from './components/About/aboutUs';
import ModalExample from './components/Form/modalForm';
import Footer from './components/Footer/footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MapApi />
        <Stream />
        <Footer />
      </div>
    );
  }
}

export default App;
