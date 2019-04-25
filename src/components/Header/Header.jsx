import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
<<<<<<< HEAD
  NavbarBrand, NavLink, NavItem,
  Nav
} from 'reactstrap';
import './header.css';
import icon from '../Footer/icon.png';
import AboutUs from '../About/aboutUs';
import YouKnow from '../DoYouKnow/youKnow';
import LegalMention from '../LegalMention/legalMention';
import youtube from '../Footer/youtube.png';
import linkedin from '../Footer/linkedin.png';
import twitter from '../Footer/twitter.png';
import facebook from '../Footer/facebook.png';

=======
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './header.css';
>>>>>>> b9756f28fada78744ebd87cbe3fda8684f733cc1

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
<<<<<<< HEAD
            <Nav navbar className="navbar-toggler">
              

=======
            <Nav navbar className='navbar-toggler'>
              <NavItem>
                <NavLink href='<AboutUs/>'>Did you know ?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Legal</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Contact US</NavLink>
              </NavItem>
>>>>>>> b9756f28fada78744ebd87cbe3fda8684f733cc1
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
