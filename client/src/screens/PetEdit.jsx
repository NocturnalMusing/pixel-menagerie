import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import StyledHeader from '../components/StyledHeader'
import StyledButton from '../components/StyledButton'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { readOnePet, destroyPet, putPet } from '../services/pets'
import './PetEdit.css'

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
                <div className='pet-home-user-adopt'>
                    <Link className='pet-home' to='/'>Home</Link>
                    {props.currentUser &&
                        <Link to={`/user/${props.currentUser.username}`}>
                            {props.currentUser.username}
                        </Link>
                    }
                    <Link className='pet-adopt-zone' to='/pet/adoption-zone'>Adoption Zone</Link>
                </div>
                <Link className='pet-logout' onClick={props.handleLogout}>Logout</Link>
            </StyledHeader>

            <div className='detail-contain'>
                {onePet &&
                    <>
                        <FontAwesomeIcon icon={`${onePet.image}`} className='detail-image' size='10x' />
                        <form className='edit-form'>
                            <input type='text' name='name'
                                className='edit-name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Name'>
                            </input>

                            <textarea type='text' name='about'
                                className='edit-about'
                                value={formData.about}
                                onChange={handleChange}
                                placeholder='Tell us about your pet...'>
                            </textarea>
                        </form>
                    </>
                }

                <div className='detail-buttons'>
                    <StyledButton onClick={handleSave}>Save</StyledButton>

                    <Link to={`/`}>
                        <StyledButton onClick={handleDelete}>Release</StyledButton>
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    )
}
