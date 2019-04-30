
import React, { Component } from 'react';
import VideoPlayer from 'react-simple-video-player';
import { ButtonGroup, Button, Container, Row } from 'reactstrap';

import './stream.css';

export default class Stream extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentVideo: 'video1',
      videoUrl: 'https://www.youtube.com/watch?v=Xjs6fnpPWy4',
    };
  }
  
  onRadioBtnClick(currentVideo, videoUrl) {
    this.setState({ currentVideo, videoUrl });
  }
    
  render() {
        
    return (
      <div>
        <Container className="videoLayout">
          <Row className="videoLayout videoBorder">
            <VideoPlayer 
              url={this.state.videoUrl} 
              height='220'
              autoplay />
            
            <ButtonGroup vertical className="videoLayout">
              <Button className="videoLayout"
                color="dark" 
                onClick={() => this.onRadioBtnClick('video1', 'https://www.youtube.com/watch?v=4993sBLAzGA')} 
                disabled={this.state.currentVideo === 'video1'}
              >1</Button>

              <Button 
                color="dark"
                onClick={() => this.onRadioBtnClick('video2', 'https://www.youtube.com/watch?v=ddFvjfvPnqk')} 
                disabled={this.state.currentVideo === 'video2'}
              >2</Button>

              <Button
                color="dark" 
                onClick={() => this.onRadioBtnClick('video3', 'https://www.youtube.com/watch?v=m23q9idOOfs')} 
                disabled={this.state.currentVideo === 'video3'}
              >3</Button>

            </ButtonGroup>
          </Row>
        </Container>
      </div>
    );
  }
}
