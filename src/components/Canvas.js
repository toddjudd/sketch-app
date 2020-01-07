// Canvas.js
import React, { Component } from 'react';
import Controls from './Controls';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.state = {
      startPos: [0, 0],
      endPos: [0, 0],
      currentPos: [0, 0],
      drawing: false,
      color: 'rgb(0, 0, 0)',
      lines: []
    };
  }

  saveLine() {
    //get state
    let lines = this.state.lines;
    //add line
    lines.push({ startPos: this.state.startPos, endPos: this.state.endPos, color: this.state.color });
    //save state
    this.setState({ lines });
    this.drawLines();
  }

  drawLines() {
    const ctx = this.canvas.current.getContext('2d');
    if (!this.state.drawing) ctx.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height);
    this.state.lines.forEach(line => {
      ctx.beginPath();
      ctx.strokeStyle = line.color;
      ctx.setLineDash([15, 15]);
      ctx.moveTo(line.startPos[0], line.startPos[1]);
      ctx.lineTo(line.endPos[0], line.endPos[1]);
      ctx.stroke();
    });
  }

  touch(e) {
    if (e.button === 2) return;
    switch (e.type) {
      case 'mousedown' || 'touchdown':
        this.setState({
          startPos: [e.pageX, e.pageY],
          drawing: true
        });
        break;
      case 'mouseup' || 'touchup':
        this.setState(
          {
            endPos: [e.pageX, e.pageY],
            drawing: false
          },
          this.saveLine
        );
        break;
      default:
        this.setState({
          currentPos: [e.pageX, e.pageY]
        });
        break;
    }
    if (!this.state.drawing) {
      return;
    }
    const ctx = this.canvas.current.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height);
    ctx.beginPath();
    ctx.strokeStyle = this.state.color;
    ctx.setLineDash([5, 5]);

    ctx.moveTo(this.state.startPos[0], this.state.startPos[1]);
    ctx.lineTo(this.state.currentPos[0], this.state.currentPos[1]);
    ctx.stroke();
    this.drawLines();
  }

  pickColor = e => {
    this.setState({
      color: getComputedStyle(e.target).color
    });
  };

  componentDidMount() {
    const canvas = this.canvas.current;

    function resizeCanvas(canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas(canvas);
    window.addEventListener('resize', resizeCanvas);

    // let painting = false;
  }

  render() {
    return (
      <React.Fragment>
        <canvas
          id='canvas'
          className='Canvas'
          ref={this.canvas}
          onTouchStart={e => this.touch(e)}
          onMouseDown={e => this.touch(e)}
          onTouchEnd={e => this.touch(e)}
          onMouseUp={e => this.touch(e)}
          onMouseMove={e => this.touch(e)}
          onTouchMove={e => this.touch(e)}
        ></canvas>
        <Controls pickColor={this.pickColor} />
      </React.Fragment>
    );
  }
}

export default Canvas;
