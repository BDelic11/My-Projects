import React, { useEffect, useState } from "react";

import "../MainBoard/index.css";
import Cell from "./Cell";
import win from "../../../constants/win";


const MainBoard = ({ cells, setCells, players, setPlayers, winner, winArray}) => {


  const playerMoveHandler = (id) => {
    setCells((prev) => {
      
      if (prev[id].used) {
        return prev; // No change if the cell is already used
      }

      const updatedCells = [...prev];
   
      if (players.playerOne.current) {
        updatedCells[id].value = players.playerOne.symbol;
        players.playerOne.history.push(id);

      } else {
        updatedCells[id].value = players.playerTwo.symbol;
        players.playerTwo.history.push(id);

      }
      updatedCells[id].used = true;
   

      return [...updatedCells];
    });
  };

  
  useEffect(() => {
    // Conditionally update players' state
    setPlayers((prev) => {
      const prevPlayers = { ...prev };
      const prevPlayerOne = { ...prevPlayers.playerOne };
      const prevPlayerTwo = { ...prevPlayers.playerTwo };

      prevPlayerOne.current = !prevPlayerOne.current;
      prevPlayerTwo.current = !prevPlayerTwo.current;

      prevPlayers.playerOne = prevPlayerOne;
      prevPlayers.playerTwo = prevPlayerTwo;

    
      return prevPlayers;
    });
  }, [cells]);

  if (players.win) {

    return (
      <div>
        <h1 className="winner">Winner is: {winner}</h1>
      <div className="main_board">
        {cells.map((cell) => (
          <Cell
          id={cell.id}
          key={cell.id}
          value={cell.value}
          winArray={winArray}
          />
          ))}
      </div>
          </div>
    );
  }

    return (
      <div className="main_board">
        {cells.map((cell) => (
          <Cell
            key={cell.id}
            value={cell.value}
            handleClick={() => playerMoveHandler(cell.id)}
          />
        ))}
      </div>
    );
};

export default MainBoard;
