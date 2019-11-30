import React, { Component } from 'react';
import './NewDoc.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

// Can use react hooks but chill for now

class NewDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    // handle the re routing to main page
    var bodyFormData = new FormData();
    bodyFormData.set('text', this.state.text);

    axios({
      url: '/addnewdoc',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: bodyFormData,
      method: 'post'
    })
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });

    event.preventDefault();
  }
  render() {
    return (
      <div className='NewDoc'>
        <form className='NewDoc-form' onSubmit={this.handleSubmit}>
          <TextField
            id='outlined-multiline-static'
            style={{ width: '40rem' }}
            label='Add your documents'
            multiline
            rows='15'
            rowsMax='15'
            className='textField'
            margin='normal'
            variant='outlined'
            required='True'
            value={this.state.text}
            onChange={this.handleChange}
          />
          <Button
            variant='contained'
            className='NewDoc--button'
            type='submit'
            value='Submit'
            color='primary'
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
export default NewDoc;
