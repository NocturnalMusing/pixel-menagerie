import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PetDetail.css'

import StyledHeader from '../components/StyledHeader'
import StyledButton from '../components/StyledButton'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { readOnePet, destroyPet } from '../services/pets'

export default function PetDetail(props) {

    const [onePet, setOnePet] = useState('')

    const petId = props.match.params.id

    useEffect(() => {
        getOnePet()
    }, [])
    // If you need an async function, make one outside of your useeffect and call it inside

    const getOnePet = async () => {
        let current = await readOnePet(petId)
        setOnePet(current)
    }

    const handleDelete = () => {
        destroyPet(petId)
        props.setAllPets(props.allPets.filter( pet => pet.id !== parseInt(petId)))
        props.history.push(`/user/${props.currentUser.username}`)
    }

    return (
        <>
            <StyledHeader>
                <Link to='/'>Home</Link>
                {props.currentUser &&
                    <Link to={`/user/${props.currentUser.username}`}>
                        {props.currentUser.username}
                    </Link>
                }
                <Link to='/pet/adoption-zone'>Adoption Zone</Link>
                <a href='#' onClick={props.handleLogout}>Logout</a>
            </StyledHeader>

            <div className='detail-contain'>
                {onePet &&
                    <div>
                        <FontAwesomeIcon icon={`${onePet.image}`} className='detail-image' size='10x' />
                        <h3 className='detail-name'>{onePet.name}</h3>
                        <p className='detail-about'>{onePet.about}</p>
                    </div>
                }

                <div className='detail-buttons'>
                    {props.currentUser &&
                        <Link to={`/user/${props.currentUser.id}/pet/${petId}/edit`}>
                            <StyledButton>Edit</StyledButton>
                        </Link>
                    }

                    <StyledButton onClick={handleDelete}>Release</StyledButton>
                </div>
            </div>

            <Footer />
        </>
    )
}
