import React, {Component} from 'react';
import Axios from 'axios';
import Map from './Map';

const issUrl = 'http://api.open-notify.org/iss-now.json';

export default class Mapapi extends Component{
  constructor(props) {
    super (props);
    this.state = {
      lat: {},
      lon: {},
      loading: true
    };
  }

  componentDidMount() {
    this.makeApiCall();
    this.refreshApi = setInterval(() => {
      this.makeApiCall();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.refreshApi);
  }

  makeApiCall(){
    Axios.get(`${issUrl}`)
      .then (response => {
        console.log(response);
        this.setState ({lat : response.data.iss_position.longitude , lon :response.data.iss_position.latitude, loading: false});
      })
      .catch(error => console.log(error));
  }

  render() {
    if(this.state.loading){
      return <p>Loading ...</p>;
    }
    return(
      <div>
        <Map lon = {this.state.lon} lat ={this.state.lat}/>
      </div>
    );
  }}

