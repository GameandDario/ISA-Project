import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './form.css';

export default class Formul extends React.Component {
  constructor (props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (event) {
    event.preventDefault();
    var data = new FormData(event.target);
    console.log(Array.from(data.entries()));
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} id="formGroup">
        <FormGroup >
          <Label for="exampleEmail" style={{backgroundcolor:'black',color:'white'}}>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="@" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect" style={{backgroundcolor:'black',color:'white'}}>Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Technical issues</option>
            <option>Join Us</option>
            <option>Others...</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText"style={{backgroundcolor:'black',color:'white'}}>Message</Label>
          <Input type="textarea" name="text" id="exampleMessage"/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      
    );
  }
}
