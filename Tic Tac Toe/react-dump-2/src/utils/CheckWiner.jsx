
import win from '../constants/win';

const CheckWiner = (players) => {


    for (const combination of win) {
        // Check if the combination is a subset of the player's history
        if (combination.every(index => players.playerOne.history.includes(index))) {
          
            return [true, players.playerOne.name, combination];
        } else if (combination.every(index => players.playerTwo.history.includes(index))) {
          
            return [true, players.playerTwo.name, combination];
        }
      }

      return [false,null,[]];
    }

export default CheckWiner;