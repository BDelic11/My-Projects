import React from 'react'

import './index.css'

const Cell = ({id, value, handleClick, winArray}) => {

  for(let i in winArray) {
   
    if (winArray[i] === id) {
      return (
        <div onClick={handleClick} className='cellWin'>
          {value}
       </div>
        )
    }
  }
 
  return (
    <div onClick={handleClick} className='cell'>
      {value}
    </div>
  )
    
}

export default Cell