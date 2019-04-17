import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './footerinheader.css';
import icon from './../Footer/icon.png';
import twitter from './../Footer/twitter.png';
import facebook from './../Footer/facebook.png';
import linkedin from './../Footer/linkedin.png';
import youtube from './../Footer/youtube.png';

export default class FooterinHeader extends React.Component {
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
        <Nav pills id="navSelected">
          <NavItem >
            <NavLink a href="http://localhost:3000/" active style={{backgroundColor:'black'}}> <img src={icon} style={{ width:'70px'}} alt="logo"/> 
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><img src={youtube} alt="social media" style={{ width:'45px'}}/></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><img src={linkedin}  alt="social media"style={{ width:'65px'}}/></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><img src={facebook}  alt="social media"style={{ width:'43px'}}/></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><img src={twitter}  alt="social media"style={{ width:'65px'}}/></NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
