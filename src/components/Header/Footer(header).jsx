import React from 'react';
import {

  Navbar,
  ListGroup, ListGroupItem,
  NavbarBrand,
} from 'reactstrap';
// import './Footer_header.css'

export default class FooterHeader extends React.Component {
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
      <div className="footerHeader">
        <Navbar light expand="md">
          <NavbarBrand href="/">Ich bin der Footer in der Header</NavbarBrand>

          <ListGroup>
            <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
            <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
            <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
          </ListGroup>

        </Navbar>
      </div>
    );
  }
}