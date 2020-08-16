import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from '../services/auth'
import './SignUpPage.css'

import StyledHeader from '../components/StyledHeader'
import StyledButton from '../components/StyledButton'
import Footer from '../components/Footer'

export default function SignUpPage(props) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = await registerUser(formData)
        props.setCurrentUser(userData)
        props.history.push(`/pet/adoption-zone`)
    }

    return (
        <>
            <StyledHeader>
                <Link className='signup-home' to='/'>Home</Link>
            </StyledHeader>

            <div className='signup-container'>
                <section className='signup-section'>
                    <p>New to <strong>Pixel Menagerie</strong>?</p>
                    <p>Let's get started by filling out this adoption application!</p>
                    <p>Once you're done, you'll be taken to the <strong>Adoption Zone</strong> to pick your first pet!</p>

                    <h2>SIGN UP</h2>
                </section>

                <form className='signup-form' onSubmit={handleSubmit}>
                    <div className='input-container'>
                        <label for='Username'>
                            Username
                <input type='text' name='username'
                                value={formData.username}
                                onChange={handleChange}
                                placeholder='Username' />
                        </label>
                        <label for='Email'>
                            Email
                <input type='text' name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email' />
                        </label>
                        <label for='Password'>
                            Password
                <input type='password' name='password'
                                value={formData.password}
                                onChange={handleChange}
                                placeholder='Password' />
                        </label>
                    </div>
                    <StyledButton>Submit</StyledButton>
                </form>
            </div>
            <Footer />
        </>
    )
}
