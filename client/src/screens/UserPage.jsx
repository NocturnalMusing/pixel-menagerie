import React from 'react'
import { Link } from 'react-router-dom'
import './UserPage.css'

import StyledHeader from '../components/StyledHeader'
import Footer from '../components/Footer'

export default function UserPage(props) {

    return (
        <>
            <StyledHeader>
                <Link to='/'>Home</Link>
                <Link to='/pet/adoption-zone'>Adoption Zone</Link>
                <Link onClick={props.handleLogout}>Logout</Link>
            </StyledHeader>

            {props.currentUser &&
                <h1>Welcome back, {props.currentUser.username}!</h1>
            }


            {/* map thru user's pets here */}

            <Footer />
        </>
    )
}
