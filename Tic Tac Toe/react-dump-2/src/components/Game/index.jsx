import React, { useEffect, useState } from 'react'

import PlayerBoard from './PlayerBoard';
import ScoreBoard from './ScoreBoard';
import MainBoard from './MainBoard';

import initialBoardState from '../../constants/board';

import '../Game/index.css'
import Reset from './Reset/Reset';
import ResetScore from './Reset/ResetScore';
import CheckWiner from '../../utils/CheckWiner';

const Game = ({players, setPlayers}) => {

  const [cells, setCells] = useState(initialBoardState())

  useEffect(() => {
    const [isWin, winner] = CheckWiner(players);

    if (isWin) {

      setPlayers((prev) => {
        const prevPlayers = {...prev};
        if (prevPlayers.playerOne.name === winner) {
          prevPlayers.playerOne.score += 1/2;
        }
        else if (prevPlayers.playerTwo.name === winner) {
          prevPlayers.playerTwo.score += 1/2;
        }
        prevPlayers.playerOne.current = false;
        prevPlayers.playerTwo.current = true;
        prevPlayers.win = true;
        return {...prevPlayers}
      })
      
    }

  }, [ cells])

  const [isWin, winner, winArray] = CheckWiner(players);
  
  return (
    <div className='game'>
        <PlayerBoard players={players}/>
        <ScoreBoard players={players} />
        <MainBoard cells={cells} setCells={setCells} players={players} setPlayers={setPlayers} winner={winner} winArray={winArray}/>
        <Reset setCells={setCells} setPlayers={setPlayers}/>
        <ResetScore setCells={setCells} setPlayers={setPlayers}/>
    </div>
  )
}

export default Game;