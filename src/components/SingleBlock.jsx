import React from 'react'

export default function SingleBlock(props) {
    return <div className='block' onClick={props.onClick}> { props.value } </div>
}