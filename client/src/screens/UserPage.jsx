import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './UserPage.css'
import { removeToken } from '../services/auth'

import StyledHeader from '../components/StyledHeader'
import Footer from '../components/Footer'

export default function UserPage(props) {
    const history = useHistory()

    const handleLogout = () => {
        props.setCurrentUser(null)
        localStorage.removeItem('authToken')
        removeToken()
        history.push('/')
    }

    return (
        <>
            <StyledHeader>
                <Link path='/'>Home</Link>
                <Link path='/adoption-zone'>Adoption Zone</Link>
                <Link onClick={handleLogout}>Logout</Link>
            </StyledHeader>

            <p>Nothing is here yet</p>
            
            <Footer />
        </>
    )
}
