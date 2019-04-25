import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './legalmention.css';
class LegalMention extends React.Component {
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
        <Button outline color="secondary" onClick={this.toggle}>{this.props.buttonLabel}Legal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader id="modalSelected" style={{ color: 'white' }}>Legal Mention</ModalHeader>
          <ModalBody id="modalSelected">
            <h1>Copyright and Intellectual Property</h1>

            <p>All items on our Site are protected by the provisions of the Code of Intellectual Property. Consequently, any reproduction of these, total or partial, or imitation, without our express agreement, preliminary and written, is prohibited.
            It is strictly forbidden to collect and use the information available on the Site for commercial purposes.
This prohibition extends in particular, without this list being limited, to any editorial element appearing on the Site, the presentation of the screens, the software necessary for the exploitation, the logos, images, photos, graphics, of some kind they are.</p>
            <h1>Security and confidentiality of data</h1>
            <p>The Company complies with the requirements of the amended law n ° 78-17 of 6 January 1978, known as "Informatique et Libertés" in the processing of personal data of the User.
The Company undertakes, in particular, to ensure the security of data in order to prevent them from being distorted, damaged or communicated to unauthorized third parties and to use them only for the sole purpose of managing spontaneous or related applications. vacant positions of the User and their follow-up.
The Company can not be held liable to the User for the loss or disappearance of data relating to a case of force majeure or the fact of a third party.</p>

            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default LegalMention;
