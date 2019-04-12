// On appelle ce composant App avec <Stream />
import React, { Component } from 'react';
import VideoPlayer from 'react-simple-video-player';
import { ButtonGroup, Button, Container, Row } from 'reactstrap';

// Appel CSS de ce composant dans components/Stream (React se base sur la localisation de Stream.jsx)
import './stream.css';

export default class Stream extends Component {
// Init du State avec un currentVideo(str) et videoUrl(url)
  constructor (props) {
    super(props);
    this.state = { 
      currentVideo: 'video1',
      videoUrl: 'https://www.youtube.com/watch?v=qnTsIVYxYkc'
    };
  }

  // Fonction du clic sur bouton qui vient changer le State    
  onRadioBtnClick(currentVideo, videoUrl) {
    this.setState({ currentVideo, videoUrl });
  }
    
  render() {
        
    return (
      <div>
        <Container className="videoLayout">

          {/* *test* Affichage composant Stream 
<h2>Composant Stream</h2>
*/}
          <Row className="videoLayout">
            {/* Appel de react-simple-video-player du type
VideoPlayer url="" height="" width="" aspectRatio=""
*/}
            <VideoPlayer url={this.state.videoUrl} autoplay />
                                
            {/* *test* Affichage composant Stream 
<h2>Composant Stream</h2>
*/}
            <ButtonGroup vertical className="videoLayout">
              <Button className="videoLayout"
                color="dark" 
                onClick={() => this.onRadioBtnClick('video1', 'https://www.youtube.com/watch?v=HtrMUqV1HQc')} 
                disabled={this.state.currentVideo === 'video1'}
              >Video 1</Button>

              <Button 
                color="dark"
                onClick={() => this.onRadioBtnClick('video2', 'https://www.youtube.com/watch?v=4993sBLAzGA')} 
                disabled={this.state.currentVideo === 'video2'}
              >Video 2</Button>
                                    
              <Button
                color="dark" 
                onClick={() => this.onRadioBtnClick('video3', 'https://www.youtube.com/watch?v=qnTsIVYxYkc')} 
                disabled={this.state.currentVideo === 'video3'}
              >Video 3</Button>
            </ButtonGroup>
            {/* *test* Affichage videoUrl
<p>Selected: {this.state.videoUrl}</p>
*/}
          </Row>
        </Container>
      </div>
    );
  }
}
