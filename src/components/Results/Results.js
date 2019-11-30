import React, { Component } from 'react';
import './Results.css';

export default function Results(props) {
  let eachres = '';
  props.data.map(eachResult => {
    eachResult += <div className=''>{eachResult}</div>;
  });
  return <div className='ViewAllDoc-container'>{eachres}</div>;
}
