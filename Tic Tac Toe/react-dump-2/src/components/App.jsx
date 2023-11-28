import { useState } from 'react';
import Form from './Form';
import Game from './Game';
import initialStatePlayers from '../constants/players';


const App = () => {

  const [players, setPlayers] = useState(initialStatePlayers);

  if (players.set) {
    return <Game players={players} setPlayers={setPlayers}/>
  }

  const playerNameHandler = (playerOneName, playerTwoName) => {
    setPlayers( (prev) => {
      const prevPlayers = {...prev};
      prevPlayers.playerOne.name = playerOneName;
      prevPlayers.playerTwo.name = playerTwoName;
      prevPlayers.set = true;
      return prevPlayers;
    });
    
  }
  return <Form playerNameHandler={playerNameHandler}/>

  }

export default App;
