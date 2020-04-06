import React, {useState} from 'react';
import {Checkerboard} from './checkerboard';
import './board.scss';

export default function Board() {
  const [ size, setSize ] = useState(8);
  
  const handleSubmit = e => {
    e.preventDefault()

    return(
      Checkerboard(size)
    )
  }

  const handleChange = field => {
    setSize(field.currentTarget.value)    
  }
  return (
    <>
      <form className="board-gen" onSubmit={handleSubmit}>
        <label htmlFor='boardSize'>
          Please input board size: <input id='boardSize' onChange={handleChange} type="number" value={size}/>
        </label>
        <button type="submit"> Generate New Board </button>
      </form>
      <div className='board'>
        {Checkerboard(size)}
      </div>
    </>
  )
}