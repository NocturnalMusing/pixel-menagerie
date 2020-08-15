import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './UserPage.css'

import StyledHeader from '../components/StyledHeader'
import Footer from '../components/Footer'
import { mammals, avians, mythic, aquatic, insects, misc } from '../assets/PetSpecies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { readAllPets } from '../services/pets'

export default function UserPage(props) {

    const [allPets, setAllPets] = useState([])

    useEffect(async () => {
        let list = await readAllPets()
        setAllPets(list)
    }, [])

    return (
        <>
            <StyledHeader>
                <Link to='/'>Home</Link>
                <Link to='/pet/adoption-zone'>Adoption Zone</Link>
                <Link onClick={props.handleLogout}>Logout</Link>
            </StyledHeader>

            {props.currentUser &&
                <>
                    <h1>Welcome back, {props.currentUser.username}!</h1>


                    <div className='pets-list'>
                        {allPets && allPets.filter(pet => pet.user_id === props.currentUser.id).map(pets => (
                            <div className='pet-single'>
                                <Link to={`/user/${props.currentUser.id}/pet/${pets.id}`}>
                                    <FontAwesomeIcon icon={`${pets.image}`} size='5x' />
                                </Link>
                                <h3 className='user-page-pet-name'>{pets.name}</h3>
                            </div>
                        )
                        )}
                    </div>
                </>
            }

            <Footer />
        </>
    )
}
