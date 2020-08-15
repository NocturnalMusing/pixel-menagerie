import React from 'react'
import './StyledHeader.css'

export default function StyledHeader(props) {
    return (
        <header className='header'>
            {props.children}
        </header>
    )
}

