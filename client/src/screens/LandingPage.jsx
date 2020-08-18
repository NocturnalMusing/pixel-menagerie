import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import StyledHeader from '../components/StyledHeader.jsx'
import Footer from '../components/Footer'
import StyledButton from '../components/StyledButton'
import './LandingPage.css'
import { loginUser } from '../services/auth'

export default function LandingPage(props) {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = await loginUser(loginData)
        props.setCurrentUser(userData)

        props.history.push(`/user/${loginData.username}`)
    }

    return (
        <>
            <StyledHeader>
                {
                    props.currentUser ? (
                        <>
                            <div>
                                <Link className='landing-username' to={`/user/${props.currentUser.username}`}>
                                    {props.currentUser.username}
                                </Link>
                                <Link className='pet-adopt-zone' to='/pet/adoption-zone'>Adoption Zone</Link>
                            </div>
                            <a href='#' className='pet-logout' onClick={props.handleLogout}>Logout</a>
                        </>

                    ) : (
                            <>
                                <form className='login-form' onSubmit={handleSubmit}>
                                    <label for='login'>Login</label>
                                    <input type='text' name='username' value={loginData.username}
                                        onChange={handleChange} placeholder='Username' />
                                    <input type='password' name='password' value={loginData.password}
                                        onChange={handleChange} placeholder='Password' />
                                    <StyledButton>Submit</StyledButton>
                                </form>
                                <Link className='sign-up-click' to='/signup'>
                                    Sign Up
                                </Link>
                            </>
                        )
                }

            </StyledHeader >

            <div className='container'>
                <h1 className='site-name'>PIXEL MENAGERIE</h1>
            </div>

            <Footer />
        </>
    )
}