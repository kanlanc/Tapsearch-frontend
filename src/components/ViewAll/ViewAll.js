import React, { Component } from 'react';
import ViewAllDoc from './ViewAllDoc/ViewAllDoc';
import './ViewAll.css';
import axios from 'axios';

export class ViewAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: []
    };
    // if this route isnt working try adding /api/viewall
    this.apiUrl = '/viewall';
  }
  componentDidMount() {
    // Make HTTP reques with Axios
    axios.get(this.apiUrl).then(res => {
      // Set state with result
      this.setState({ docs: res.data });
      console.log(res);
    });
    console.log(this.state.docs);
  }
  render() {
    let docList = this.state.docs.map(doc => {
      return <ViewAllDoc doc={doc} />;
    });
    return <div className='ViewAll-container'>{docList}</div>;
  }
}

export default ViewAll;
