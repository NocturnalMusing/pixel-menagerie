import React from 'react'
import './StyledButton.css'

export default function StyledButton(props) {
    return (
        <>
         <button className='button'>{props.children}</button>   
        </>
    )
}

