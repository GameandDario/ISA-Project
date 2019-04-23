import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './footer.css';
import icon from './icon.png';
import twitter from './twitter.png';
import facebook from './facebook.png';
import linkedin from './linkedin.png';
import youtube from './youtube.png';
import AboutUs from '../About/aboutUs';
import ModalExample from '../Form/modalForm';
import YouKnow from '../DoYouKnow/youKnow';
import LegalMention from '../LegalMention/legalMention';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav pills id="navSelected" className="footer-container">
          <div className="footer-left-side">
            <NavLink a href="http://localhost:3000/" active style={{ backgroundColor: 'transparent' }}> <img src={icon} style={{ width: '70px' }} alt="logo" />
            </NavLink>
            <YouKnow/>
            <AboutUs />
            <LegalMention/>
            <ModalExample />
          </div>
          <div className="footer-right-side">

            <NavItem >

            </NavItem>
            <NavItem>
              <NavLink href="https://www.youtube.com/channel/UC6OaWVxVXURpicItggIABew"><img src={youtube} alt="social media" style={{ width: '45px' }} /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.linkedin.com/company/international-space-station/about/"><img src={linkedin} alt="social media" style={{ width: '65px' }} /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.facebook.com/ISS/"><img src={facebook} alt="social media" style={{ width: '43px' }} /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://twitter.com/space_station"><img src={twitter} alt="social media" style={{ width: '65px' }} /></NavLink>
            </NavItem>
          </div>
        </Nav>
      </div>
    );
  }
}
