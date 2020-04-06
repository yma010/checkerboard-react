import React from 'react';
import {Checkerboard} from './checkerboard';
import './board.scss';

export default class Board extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      size: 8,
    }
    this.handleChange.bind();
    this.handleSubmit.bind();
  }
  
  handleSubmit(e) {
    e.preventDefault()
  }

  generateBoard() {
    const {size} = this.state;
    return (
      <Checkerboard size={size}/>
    )
  }

  handleChange(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    const {size} = this.state;
    return (
      <>
        <form className="board-gen" onSubmit={this.handleSubmit}>
          <label htmlFor='boardSize'>
            Please input board size: <input id='boardSize' onChange={this.handleChange('size')} type="number" value={size}/>
          </label>
        </form>
        <div className='board'>
          {Checkerboard(size)}
        </div>
    </>
  )}
}