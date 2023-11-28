import React from 'react'
import '../index.css'

const PlayerBoard = ({players: {playerOne, playerTwo}}) => {
  return <>
    {playerOne.current ? 
    <div>
      <h1 className='player'>Current player: {playerOne.name} </h1> 
     
    </div> :
    <div>
      <h1 className='player'>Current player: {playerTwo.name}</h1>
     
    </div>
    }
  </>

}

export default PlayerBoard;