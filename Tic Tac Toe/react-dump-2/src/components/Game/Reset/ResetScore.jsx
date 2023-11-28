import React from 'react'
import initialBoardState from '../../../constants/board'

const ResetScore = ({setCells, setPlayers}) => {

        const resetScoreHandler = () => {
            setCells(initialBoardState);
            setPlayers((prev) => {
              return {
                ...prev,
                win: false, // Set win to false when resetting the game
                playerOne: {
                  ...prev.playerOne,
                  history: [],
                  score: 0 // Clear playerOne's history
                },
                playerTwo: {
                  ...prev.playerTwo,
                  history: [],
                  score: 0 // Clear playerTwo's history
                },
              };
            });
          };
  return (
    <div>
        <button 
            className='buttonGame'
            onClick={resetScoreHandler}
        >
            Reset Score
        </button>
    </div>
  )
}

export default ResetScore