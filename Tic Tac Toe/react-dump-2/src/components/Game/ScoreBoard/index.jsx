import React from 'react'

const ScoreBoard = ({players}) => {
  return (
    players.playerOne.score || players.playerTwo.score ?
    <div className='scoreBoard'>
      <h2 className='h2'>ScoreBoard</h2>
      {`${players.playerOne.name} : ${players.playerOne.score}  ${players.playerTwo.name} : ${players.playerTwo.score}`}
    </div> : <>ScoreBoard</>
  )
}

export default ScoreBoard;