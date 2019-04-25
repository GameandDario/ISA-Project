import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class YouKnow extends React.Component {
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
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <Button outline color="secondary" onClick={this.toggle}>{this.props.buttonLabel}Did you know</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader id="modalSelected" style={{ color: 'white' }}>Did you know ?</ModalHeader>
          <ModalBody id="modalSelected" style={{color:'white'}}>
            <p>Relationship between injection speed and orbit (apogee) for a perigee set at 200 km1 Perigee (km) Injection speed (km / s) Remark Apogee reached (km) Orbit type 200 7.78 Minimum ori- fication speed 200 Low (circular orbit) 200 8 1,000 Low 200 9.2 10 000 Medium 200 10.2 36 000 Geosynchronous 200 10.8 380 000 Moon 200 11 Interplanetary infinite release rate</p>
            <p>The speed ​​of the ISS 28000km / h.</p>
            <p>It can accommodate 6 people.</p>
            <p>The mass of the satellite is 420 tons, the height of the orbit: 408 km and it's the size of a football field: 108 * 74 m </p>
            <p>cost 150 billions USD</p>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default YouKnow;
