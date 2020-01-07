// Controls.js
import React, { Component } from 'react';

class Controls extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <ul className='Controls' id='controls'>
        <li onClick={() => this.props.pickTool('drawSquare')}>
          <div className='shapeSelector' id='square'></div>
        </li>
        <li onClick={() => this.props.pickTool('drawCircle')}>
          <div className='shapeSelector' id='circle'></div>
        </li>
        <li onClick={() => this.props.pickTool('drawLine')}>
          <div className='shapeSelector' id='line'></div>
        </li>
        <li id='breakpoint' />
        <li
          onClick={e => {
            this.props.pickLine([15, 15]);
          }}
        >
          <div className='line' id='dottedLine'></div>
        </li>
        <li
          onClick={e => {
            this.props.pickLine([]);
          }}
        >
          <div className='line' id='solidLine'></div>
        </li>
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
        <li
          onClick={e => {
            this.props.pickColor(e);
          }}
        >
          <i className='fas fa-rocket' id='black'></i>
        </li>
      </ul>
    );
  }
}

export default Controls;
