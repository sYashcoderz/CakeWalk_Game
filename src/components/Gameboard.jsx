import React from "react";
import Cell from "./Cell.jsx";
import '../../src/App.css';

const Gameboard = () => {
    
    return (
       <div className="board">
            <Cell row={0} column={0} />
            <Cell row={0} column={1} />
            <Cell row={0} column={2} />
            
            <Cell row={1} column={0} />
            <Cell row={1} column={1} />
            <Cell row={1} column={2} />

            <Cell row={2} column={0} />
            <Cell row={2} column={1} />
            <Cell row={2} column={2} />
       </div>
    )
}

export default Gameboard