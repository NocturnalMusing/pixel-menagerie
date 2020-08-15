import React from 'react'
import './StyledButton.css'

export default function StyledButton(props) {
    return (
        <>
         <button onClick={props.onClick} className='button'>{props.children}</button>   
        </>
    )
}

