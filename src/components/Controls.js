// Controls.js
import React, { Component } from 'react';

class Controls extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <ul className='Controls' id='controls'>
        <li
          onClick={e => {
            this.props.pickColor(e);
          }}
        >
          <i className='fas fa-rocket' id='red'></i>
        </li>
        <li
          onClick={e => {
            this.props.pickColor(e);
          }}
        >
          <i className='fas fa-rocket' id='blue'></i>
        </li>
        <li
          onClick={e => {
            this.props.pickColor(e);
          }}
        >
          <i className='fas fa-rocket' id='green'></i>
        </li>
        <li
          onClick={e => {
            this.props.pickColor(e);
          }}
        >
          <i className='fas fa-rocket' id='yellow'></i>
        </li>
      </ul>
    );
  }
}

export default Controls;
