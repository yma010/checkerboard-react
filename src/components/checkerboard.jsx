import React from 'react'

export const Checkerboard = ( size ) => {
  const gridSize = Math.pow(size, 2)
  const grids = [...Array(gridSize).keys()].map((i) => (
    <div key={i} className={`grid col-${i} row-${i} ${i % 2 === 0 ? 'black' : 'white'}`}></div>
    ));

  return(
    <>
      {grids}
    </>
  )
};
