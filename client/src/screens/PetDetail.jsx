import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import StyledHeader from '../components/StyledHeader'
import StyledButton from '../components/StyledButton'
import Footer from '../components/Footer'
import { mammals, avians, mythic, aquatic, insects, misc } from '../assets/PetSpecies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PetDetail(props) {

    const [ onePet, setOnePet ] = useState([])

    useEffect(async () => {
        let current = readOnePet(id)
        setOnePet(current)
    }, [])

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

            <FontAwesomeIcon icon={`${pets.image}`} size='7x' />
            <h3>{pets.name}</h3>
            <p>{pets.about}</p>

            <Footer />
        </>
    )
}
