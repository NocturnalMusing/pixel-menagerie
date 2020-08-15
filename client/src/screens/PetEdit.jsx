import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import StyledHeader from '../components/StyledHeader'
import StyledButton from '../components/StyledButton'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { readOnePet, destroyPet, putPet } from '../services/pets'

export default function PetEdit(props) {

    const [onePet, setOnePet] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        about: ''
    })

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
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSave = async () => {
        const updatePet = await putPet(petId, formData)
        props.history.push(`/user/${props.currentUser.id}/pet/${petId}`)
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

            {onePet &&
                <>
                    <FontAwesomeIcon icon={`${onePet.image}`} size='10x' />
                    <form>
                        <input type='text' name='name'
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Name'>
                        </input>

                        <input type='text' name='about'
                            value={formData.about}
                            onChange={handleChange}
                            placeholder='Tell us about your pet...'>
                        </input>
                    </form>
                </>
            }

            <StyledButton onClick={handleSave}>Save</StyledButton>

            <Link to={`/`}>
                <StyledButton onClick={handleDelete}>Release</StyledButton>
            </Link>

            <Footer />
        </>
    )
}
