import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <p><a href='/'>
                    Icons by Font Awesome</a>
                </p>
                <p>site by <a href='/'>
                    NocturnalMusing</a> 
                </p>
            </div>
        )
    }
}
