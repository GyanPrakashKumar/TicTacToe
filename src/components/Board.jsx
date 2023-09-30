import React, { useState } from 'react'
import SingleBlock from './SingleBlock'

export default function Board({ state, player, handlePlayerClick, endGame }) {    
    return <div className='board'>
        {
            endGame ? <p> Game Over! Player {player} wins! </p> :
            <>
                <div className='row'>
                    <SingleBlock onClick={()=> handlePlayerClick(0)} value={state[0]} />
                    <SingleBlock onClick={()=> handlePlayerClick(1)} value={state[1]} />
                    <SingleBlock onClick={()=> handlePlayerClick(2)} value={state[2]} />
                </div>
                <div className='row'>
                    <SingleBlock onClick={()=> handlePlayerClick(3)} value={state[3]} />
                    <SingleBlock onClick={()=> handlePlayerClick(4)} value={state[4]} />
                    <SingleBlock onClick={()=> handlePlayerClick(5)} value={state[5]} />
                </div>
                <div className='row'>
                    <SingleBlock onClick={()=> handlePlayerClick(6)} value={state[6]} />
                    <SingleBlock onClick={()=> handlePlayerClick(7)} value={state[7]} />
                    <SingleBlock onClick={()=> handlePlayerClick(8)} value={state[8]} />
                </div>
            </>
        }
    </div>
}