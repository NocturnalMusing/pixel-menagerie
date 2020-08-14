import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import StyledHeader from '../components/StyledHeader'
import StyledButton from '../components/StyledButton'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { readOnePet, destroyPet, putPet, postPet } from '../services/pets'

export default function PetDetail(props) {

    const [onePet, setOnePet] = useState('')
    const [ formData, setFormData ] = useState({
        name: '',
        about: ''
    })

    const petId = props.match.params.id

    useEffect(async () => {
        let current = await readOnePet(petId)
        setOnePet(current)
    }, [])

    const handleDelete = () => {
        destroyPet(petId)
    }

    const handleChange = (e) => {
        const {value} = e.target
        setFormData({name: value, about: value})
    }

    const handleSave = async (e) => {
        e.preventDefault()
        const updatePet = await postPet(formData)
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
                    < FontAwesomeIcon icon={`${onePet.image}`} size='10x' />
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
            
            {/* <Link to={`/user/${props.currentUser.id}/pet/${}`}> */}
            <StyledButton onClick={handleSave}>Save</StyledButton>
            {/* </Link> */}

            <Link to={`/`}>
            <StyledButton onClick={handleDelete}>Release</StyledButton>
            </Link>

            <Footer />
        </>
    )
}
