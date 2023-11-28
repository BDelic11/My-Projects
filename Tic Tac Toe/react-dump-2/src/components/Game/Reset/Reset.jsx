import React from 'react'
import initialBoardState from '../../../constants/board'

const Reset = ({setCells, setPlayers}) => {

        const resetHandler = () => {
            setCells(initialBoardState);
            setPlayers((prev) => {
              return {
                ...prev,
                win: false, // Set win to false when resetting the game
                playerOne: {
                  ...prev.playerOne,
                  history: [], // Clear playerOne's history
                },
                playerTwo: {
                  ...prev.playerTwo,
                  history: [], // Clear playerTwo's history
                },
              };
            });
          };
  return (
    <div>
        <button 
            className='buttonGame'
            onClick={resetHandler}
        >
            Reset
        </button>
    </div>
  )
}

export default Reset