import Gameboard from './components/Gameboard.jsx'
import {Header} from './components/Header.jsx';
import { Activity } from './components/Activity.jsx';
import Dashboard from './components/Dashboard.jsx';


import {React, createContext, useEffect, useState, } from 'react';
 
export const GameContext = createContext();

function App() {

  const emptyGame = [["", "", ""], ["", "", ""], ["", "", ""]]
  const [cells, setCells] = useState(emptyGame)
  const [winnerCells, setWinnerCells] = useState([[],[],[]])
  const [fun, setFun] = useState([])
  const [formData, setFormData] = useState()

  const X = "X"
  const O = "O"
  const [currentChar, setCurrentChar] = useState(X);
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false)
  const [selectPlayer, setSelectPlayer] = useState(false)

  useEffect(function() {
    isGameOver()
  }, [cells])

  const onCellClick = (row, column) => {
    if (gameOver || winner) {
      return;
    }

    if (cells[row][column] != "") {
      return;
    }

    const newBoard = {...cells}
    newBoard[row][column] = currentChar
    setCells(newBoard)
    changeChar()
    setFun(() => ([...fun, {"row": row,"column": column, "char": currentChar}]))
  } 

  const changeChar = () => {
    if (currentChar == X) {
      setCurrentChar(O)
    } else {
      setCurrentChar(X)
    }
  } 

  const reset = () => {
    setCells(emptyGame)
    setWinner("")
    setGameOver(false)
    setWinnerCells([[],[],[]])
    setFun([])
  }

  function isGameOver() {
    switch (true) {
      case checkTheSameInRow(0): return
      case checkTheSameInRow(1): return
      case checkTheSameInRow(2): return
      case checkTheSameInColumn(0): return
      case checkTheSameInColumn(1): return
      case checkTheSameInColumn(2): return
      case checkTheSameInDiagonal(): return
    }

    if (!cells[0].includes("") && !cells[1].includes("") && !cells[2].includes("")) {
      endGame("")
    }
  }

  function endGame(winner) {
    if (winner != "") setWinner(winner)
    setGameOver(true)
  }

  function checkTheSameInRow(row) {
    if (cells[row][0] !== "" && cells[row][0] === cells[row][1] && cells[row][0] === cells[row][2]) {
      endGame(cells[row][0])
      
      const newWinner = [[],[],[]]
      newWinner[row][0] = true
      newWinner[row][1] = true
      newWinner[row][2] = true
      setWinnerCells(newWinner)
      return true
    }
    return false
  }

  function checkTheSameInColumn(column) {
    if (cells[0][column] !== "" && cells[0][column] === cells[1][column] && cells[2][column] == cells[0][column]) {
      endGame(cells[0][column])
      
      const newWinner = [[],[],[]]
      newWinner[0][column] = true
      newWinner[1][column] = true
      newWinner[2][column] = true
      setWinnerCells(newWinner)
      return true
    }
    return false
  }

  function checkTheSameInDiagonal() {
    if (cells[1][1] != "" && (cells[0][0] === cells[1][1] && cells[0][0] == cells[2][2])) {
      endGame(cells[1][1])
      const newWinner = [[],[],[]]
      newWinner[0][0] = true
      newWinner[1][1] = true
      newWinner[2][2] = true
      setWinnerCells(newWinner)
      return true
    }

    if (cells[1][1] != "" && (cells[2][0] === cells[1][1] && cells[2][0] == cells[0][2])) {
      endGame(cells[1][1])
      const newWinner = [[],[],[]]
      newWinner[0][2] = true
      newWinner[1][1] = true
      newWinner[2][0] = true
      setWinnerCells(newWinner)
      return true
    }
    return false
  }

  return (
    <div className="App">
      <header className="App-header">
        <GameContext.Provider value={{cells,fun, setFun, formData, emptyGame, setSelectPlayer, setFormData, setCells, onCellClick, currentChar, winner, gameOver, winnerCells}} >
        { (!selectPlayer) ? <Dashboard /> :
        <>
        <h1>Welcome to Cake Walk Tic Tac Toe</h1>
        <Header />
        <Gameboard />
        <Activity />
        <button className='btn-reset' onClick={() => reset()}>Reset</button>
        </>
        }
        </GameContext.Provider>
      </header>
    </div>
  );
}

export default App;
