import React from 'react'
import { Link } from 'react-router-dom'

import StyledHeader from '../components/StyledHeader'
import Footer from '../components/Footer'
import { mammals } from '../assets/PetSpecies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AdoptZone(props) {


    return (
        <>
            <StyledHeader>
                <Link to='/'>Home</Link>
                <Link to={`/user/${props.currentUser.username}`}>
                    {props.currentUser.username}
                </Link>
                <Link onClick={props.handleLogout}>Logout</Link>
            </StyledHeader>

            <header>
                <h1>Adoption Zone</h1>
                <h3>Click a creature to take them home</h3>
            </header>

            <h3>Mammals</h3>
            <div>
                {mammals.map(mammal => 
                    <FontAwesomeIcon icon={`${mammal.image}`}/>
                    )}
            </div>

            <Footer />
        </>
    )
}


// h1 tag that says mammals, then map through mammals array

// onClick to grab user_id 
// should be stored in localStorage