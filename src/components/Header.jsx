import React, { useContext, useState } from "react";
import { GameContext } from "../App";

export const Playing = () => {
    const { currentChar, formData } = useContext(GameContext)
    return (
        <div>Playing now: <span>{((currentChar == 'X')? `${formData?.firstPlayer}` : `${formData?.secondPlayer}`)}</span></div>
    )
}

export const End = () => {
    
    return (
        <div>Game Over</div>
    )
}

export const Winner = () => {
    
    const { winner, formData, currentChar } = useContext(GameContext)

    return (
        <div>Congratulations <span>{winner}</span> 
        {/* <span>{((currentChar == 'X')? `${formData?.firstPlayer}` : `${formData?.secondPlayer}`)}</span>, */}
         {` you WON!`}</div>
    )
}



export const Header = () => {
    
    const { currentChar, winner, gameOver } = useContext(GameContext)

    return (
        <div className="header">
            { !winner && !gameOver && <Playing /> }
            { gameOver && !winner && <End /> }
            { winner && <Winner /> }
        </div>
    )
}
