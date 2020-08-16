import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div>
                <p>
                    Icons by <a href='https://fontawesome.com/'>Font Awesome</a>
                </p>
                <p>
                    BulkyPixels font by <a href='http://www.smokingdrum.com.'>John Bloor</a>
                </p>
                </div>
                <p className='site-credit'>site by <a href='https://github.com/NocturnalMusing'>
                    NocturnalMusing</a> 
                </p>
            </div>
        )
    }
}
