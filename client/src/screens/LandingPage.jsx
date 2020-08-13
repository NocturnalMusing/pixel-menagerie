import React from 'react'
import { Link } from 'react-router-dom'
import StyledHeader from '../components/StyledHeader.jsx'
import Footer from '../components/Footer'
import StyledButton from '../components/StyledButton'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <>
            <StyledHeader>
                <form>
                    <label for='login'>Login</label>
                    <input type='text' name='username' placeholder='Username'/>
                    <input type='password' name='password' placeholder='Password'/>
                </form>
                <Link to='/'>
                    <StyledButton className='login-button'>
                        Submit
                    </StyledButton>
                </Link>
                <Link to='/signup'>
                    Sign Up
                </Link>
            </StyledHeader>
            <div className='container'>
                <h1 className='site-name'>PIXEL MENAGERIE</h1>
            </div>

            <Footer />
        </>
    )
}
