import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from 'reactstrap';
import './header.css';
import FooterinHeader from './FooterinHeader';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="mainNavBar navbar-dark reflection" expand="md">
          <img src="https://trello-attachments.s3.amazonaws.com/5ca317fe74fb540c9a1cb88b/5ca3812724de1a74acaa7030/a70647b2759f978c83fe1dcfb941f303/LOGO_ISA.png" 
            className="IsaLogo" alt="IsaLogo" />
          <h1><NavbarBrand className="brand" href="/">SPOT THE ISS </NavbarBrand></h1>
          <NavbarToggler className="bg-dark light navbar-toggler" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
            
              <FooterinHeader className="navbar-toggler"/>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
