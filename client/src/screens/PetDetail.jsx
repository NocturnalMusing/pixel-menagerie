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

    useEffect(async () => {
        let current = await readOnePet(petId)
        setOnePet(current)
    }, [])

    const handleDelete = () => {
        destroyPet(petId)
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
                <Link onClick={props.handleLogout}>Logout</Link>
            </StyledHeader>

            <div className='pet-detail-contain'>
                {onePet &&
                    <div>
                        <FontAwesomeIcon icon={`${onePet.image}`} size='10x' />
                        <h3 className='detail-name'>{onePet.name}</h3>
                        <p>{onePet.about}</p>
                    </div>
                }

                {/* <Link to={`/user/${props.currentUser.id}/pet/${}/edit`}> */}
                <StyledButton>Edit</StyledButton>
                {/* </Link> */}
                <Link to={`/`}>
                    <StyledButton onClick={handleDelete}>Release</StyledButton>
                </Link>
            </div>

            <Footer />
        </>
    )
}
