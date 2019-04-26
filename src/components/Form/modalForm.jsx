import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Formul from './form';
import './form.css';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}></button>;
    return (
      <div>
        <Button outline color="secondary" onClick={this.toggle}>{this.props.buttonLabel}Contact Us</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader id="modalSelected" style={{color:'white'}}>Contact Us</ModalHeader>
          <ModalBody id="modalSelected">
            <Formul />
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
