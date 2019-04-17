import React from 'react';
import { Container } from 'reactstrap';
import './issmarker.css';

export default class IssMarker extends React.Component {
  render() {
    return (
      <div className="pill-container">
        <Container>
          <div className='pill'>
            <div><img className='iss' src="https://trello-attachments.s3.amazonaws.com/5ca317fe74fb540c9a1cb88b/5ca46b8cbc9b386b1cd38275/5ecbbc5176b6fffa3eae3894e36ba6fa/iconSat_white.png" alt="IssMarker" />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}