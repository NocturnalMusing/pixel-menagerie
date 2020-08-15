import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './UserPage.css'

import StyledHeader from '../components/StyledHeader'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function UserPage(props) {

    const {allPets} = props

    return (
        <>
            <StyledHeader>
                <Link to='/'>Home</Link>
                <Link to='/pet/adoption-zone'>Adoption Zone</Link>
                <Link onClick={props.handleLogout}>Logout</Link>
            </StyledHeader>

            {props.currentUser &&
                <>
                    <h1 className='user-welcome'>Welcome back, {props.currentUser.username}!</h1>


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
