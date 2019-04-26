// Call App component with "<Stream/>"
import React, { Component } from 'react';
import VideoPlayer from 'react-simple-video-player';
import { ButtonGroup, Button, Container, Row } from 'reactstrap';

// Import CSS
import './stream.css';

export default class Stream extends Component {
//Initilising States with 2 states : currentVideo and videoUrl
  constructor (props) {
    super(props);
    this.state = { 
      currentVideo: 'video1',
      videoUrl: 'https://www.youtube.com/watch?v=Xjs6fnpPWy4'
    };
  }
  //On click button to modify states 
  onRadioBtnClick(currentVideo, videoUrl) {
    this.setState({ currentVideo, videoUrl });
  }
    
  render() {
        
    return (
      <div>
        <Container className="videoLayout">
          <Row className='videoBorder'>
            {/* Call react-simple-video */}
            <VideoPlayer url={this.state.videoUrl} autoplay />
            
            <ButtonGroup vertical className="videoLayout">
              <Button className="videoLayout"
                color="dark" 
                onClick={() => this.onRadioBtnClick('video1', 'https://www.youtube.com/watch?v=Xjs6fnpPWy4')} 
                disabled={this.state.currentVideo === 'video1'}
              >Video 1</Button>

              <Button 
                color="dark"
                onClick={() => this.onRadioBtnClick('video2', 'https://www.youtube.com/watch?v=4993sBLAzGA')} 
                disabled={this.state.currentVideo === 'video2'}
              >Video 2</Button>
                                    
              <Button
                color="dark" 
                onClick={() => this.onRadioBtnClick('video3', 'https://www.youtube.com/watch?v=21X5lGlDOfg')} 
                disabled={this.state.currentVideo === 'video3'}
              >Video 3</Button>
            </ButtonGroup>
          </Row>
        </Container>
      </div>
    );
  }
}
