import React from 'react'
import { Link } from 'react-router-dom'

import StyledHeader from '../components/StyledHeader'
import Footer from '../components/Footer'

export default function UserPage() {
    return (
        <>
            <StyledHeader>
                <Link path='/'>Home</Link>
                <Link path='/adoption-zone'>Adoption Zone</Link>
                <Link>Logout</Link>
            </StyledHeader>

            <p>Nothing is here yet</p>
            
            <Footer />
        </>
    )
}
