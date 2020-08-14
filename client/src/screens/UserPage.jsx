import React from 'react'
import { Link } from 'react-router-dom'
import './UserPage.css'

import StyledHeader from '../components/StyledHeader'
import Footer from '../components/Footer'
import { mammals, avians, mythic, aquatic, insects, misc } from '../assets/PetSpecies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { readAllPets } from '../services/pets'

export default function UserPage(props) {

    const allPets = readAllPets()

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
            <div>
                {/* use readAllPets to find all the pets where user_id matches props.currentUser.id*/}
                {allPets.map(pets => {
                    if (pets.user_id === props.currentUser.id) {
                        <>
                            <FontAwesomeIcon icon={`${pets.image}`} size='7x' />
                            <h3>{pets.name}</h3>
                            <p>{pets.about}</p>
                        </>
                    }
                })}
            </div>

            <Footer />
        </>
    )
}
