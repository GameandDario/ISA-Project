import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Media } from 'reactstrap';
import jean from './jean.jpeg';
import dan from './dan.jpeg';
import steph from './steph.png';
import clea from './clea.png';

const Pictures = () => {
  return (
    <div>
      <Media>
        <Media left top href="https://scontent-ams3-1.xx.fbcdn.net/v/t1.15752-9/56573501_1044023595790789_2763882528094814208_n.jpg?_nc_cat=103&_nc_ht=scontent-ams3-1.xx&oh=d85232ae3c282fc0987d36f84d72f8a4&oe=5D3F840C">
          <img src={jean} alt="jean" width="210"/>
        </Media>
        <Media body style={{backgroundColor:'black', color:'white'}}>
          <Media heading>
            Jean
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left bottom href="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.15752-9/57239024_358222488118260_3524599920017276928_n.png?_nc_cat=106&_nc_ht=scontent-cdg2-1.xx&oh=a9df81978ad117561985444bfde8666c&oe=5D3C6B44">
          <img src={steph} alt="steph" width="210"/>
        </Media>
        <Media body style={{backgroundColor:'black', color:'white'}}>
          <Media heading>
            Stéphane
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left bottom href="https://scontent-ams3-1.xx.fbcdn.net/v/t1.15752-9/56866508_404542567006174_3485090498681503744_n.jpg?_nc_cat=107&_nc_ht=scontent-ams3-1.xx&oh=f9962937ec3a1cd850581bdb6a748ddf&oe=5D2DFB8D">
          <img src={dan} alt="dan" width="210"/>
        </Media>
        <Media body style={{backgroundColor:'black', color:'white'}}>
          <Media heading>
            Dan
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left bottom href="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.15752-9/57703291_409517106264392_1454826201930530816_n.png?_nc_cat=103&_nc_ht=scontent-cdg2-1.xx&oh=3dd4d813f3bec093b6874327e121a770&oe=5D3EF520">
          <img src={clea} alt="clea" width="210"/>
        </Media>
        <Media body style={{backgroundColor:'black', color:'white'}}>
          <Media heading>
            Cléa
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
    </div>
  );
};

class AboutUs extends React.Component {
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
        <Button outline color="secondary" onClick={this.toggle}>{this.props.buttonLabel}About Us</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader style={{backgroundColor:'black',color:'white'}}>About Us</ModalHeader>
          <ModalBody style={{backgroundColor:'black'}}>
            <Pictures />
          </ModalBody>
          <ModalFooter style={{backgroundColor:'black', color:'white'}}>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AboutUs;
