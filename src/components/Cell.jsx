import React, { useContext } from "react";
import { GameContext } from "../App";
import '../../src/App.css';

const Cell = ({row, column}) => {
    const { onCellClick, cells, winner, gameOver, winnerCells} = useContext(GameContext)
    const currentVal = cells[row][column]
    return (
       <div className={"cell" 
         + (!currentVal && !gameOver ? " active" : "")
         + (winnerCells[row][column] ? " winner" : "")
         + (gameOver ? " disabled" : "")
    }
          onClick={() => onCellClick(row, column)}>
           <div>{currentVal}</div>
       </div>
    )
}

export default Cell