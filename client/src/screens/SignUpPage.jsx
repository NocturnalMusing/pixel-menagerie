import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from '../services/auth'
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
                <Link to='/'>Home</Link>
            </StyledHeader>

            <section>
                <p>New to Pixel Menagerie?</p>
                <p>Let's get started by filling out this adoption application!</p>
                <p>Once you're done, you'll be taken to the Adoption Zone to pick your first pet!</p>
            </section>

            <h2>SIGN UP</h2>

            <form onSubmit={handleSubmit}>
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
                <StyledButton>Submit</StyledButton>
            </form>
            <Footer />
        </>
    )
}
