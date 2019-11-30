import React, { Component } from 'react';
import './Results.css';

export default function Results(props) {
  let eachres;
  if (props.data.length != 0) {
    eachres = props.data.map(eachResult => {
      return (
        <div className='' style={{ marginBottom: '2%' }}>
          {eachResult}
        </div>
      );
    });
  } else {
    eachres = 'No documents match your serach';
  }
  return <div className='Results-container'>{eachres}</div>;
}
