import React from 'react'
import { Link } from 'react-router-dom'
import StyledHeader from '../components/StyledHeader'
import StyledButton from '../components/StyledButton'
import Footer from '../components/Footer'

export default function SignUpPage() {
    return (
        <>
            <StyledHeader>
                <Link to='/'>Home</Link>
            </StyledHeader>

            <greeting>
                <p>New to Pixel Menagerie?</p>
                <p>Let's get started by filling out this adoption application!</p>
                <p>Once you're done, you'll be taken to the Adoption Zone to pick your first pet!</p>
            </greeting>

            <h2>SIGN UP</h2>

            <form>
                <label for='Username'>Username</label>
                <input type='text' name='username' placeholder='Username'/>
                <label for='Email'>Email</label>
                <input type='' name='username' placeholder='Email'/>
                <label for='Password'>Password</label>
                <input type='password' name='password' placeholder='Password'/>
            </form>
            <StyledButton>Submit</StyledButton>
            <Footer />
        </>
    )
}
