import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../App";


export const Activity = () => {
    const { currentChar, fun, formData, cells, setCells, setFun,  setGameOver, setWinner, } = useContext(GameContext)
    const [data, setData] = useState([])

    console.log("Fun ==>>", fun)
    const getInd = (ind) => {
        let test = [...fun]
        for(let i=ind; i< fun.length; i++) {
            test.pop()
            const {row, column} = fun[i]
            let arr = {...cells}
            arr[row][column] = ""
            setCells(arr)    
        }
        setFun(test)
        setWinner("")
        setGameOver(false)
    }

    return (
        <div style={{border:'1px solid red', width: '380px'}}>
            <h4>Activity</h4>
            <ul>
                {fun.map((item, ind) => ( 
                <li style={{cursor: 'pointer'}} onClick={ () => getInd(ind)}>
                    <span>
                        {(item?.char == 'X') ? `${formData?.firstPlayer}` :
                         `${formData?.secondPlayer}`} - clicked on cord. {item?.row},{item?.column} 
                    </span> 
                </li>) )}
            </ul>
        </div>
    )
}