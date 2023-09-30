import React, { useState } from 'react'
import Board from './components/Board'
import './App.css'

export default function App() {
    const [state, setState] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState('X');
    const [endGame, setEndGame] = useState(false)
    
    function checkWinner(state) {
        const conditions = [
            [0, 1, 2], // first row
            [3, 4, 5], // second row
            [6, 7, 8], // third row
            [0, 3, 6], // first column
            [1, 4, 7], // second column
            [2, 5, 8], // third column
            [0, 4, 8], // top l-r diagonal
            [2, 4, 6], // top r-l diagonal
        ];

        for(let ind = 0; ind < conditions.length; ind++) {
            const [ ind1, ind2, ind3 ] = conditions[ind]; // Array destructuring
            if (state[ind1] && state[ind1] === state[ind2] && state[ind1] === state[ind3]) return true;
        }
        return false;
    }

    function handlePlayerClick(index) {
        const stateCopy = Array.from(state);
        setState(stateCopy);

        if (stateCopy[index] !== null) return;
        
        stateCopy[index] = player;

        const winner = checkWinner(stateCopy);
        if(winner) return setEndGame(true);
        
        setPlayer(player === 'X' ? 'O' : 'X');
    }
  return (
    <main>
        <h1>Tic Toc Toe</h1>
        <Board 
            state={state}
            player={player}
            handlePlayerClick={handlePlayerClick}
            checkWinner={checkWinner}
            endGame={endGame}
        />
    </main>
  )
}
