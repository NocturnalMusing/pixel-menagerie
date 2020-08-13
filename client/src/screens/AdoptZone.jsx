import React from 'react'
import { Link } from 'react-router-dom'

import StyledHeader from '../components/StyledHeader'
import Footer from '../components/Footer'
import { mammals, avians, mythic, aquatic, insects, misc } from '../assets/PetSpecies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { postPet } from '../services/pets'

export default function AdoptZone(props) {
    const handleClick = (petData) => {
        postPet(petData)
        // redirect to pet page, route of :id
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
                <Link onClick={props.handleLogout}>Logout</Link>
            </StyledHeader>

            <header>
                <h1>Adoption Zone</h1>
                <h3>Click a creature to take them home</h3>
            </header>

            <h3>Avians</h3>
            <div>
                {avians.map(avian =>
                    <FontAwesomeIcon icon={`${avian.image}`} size='5x' 
                    onClick= {() => handleClick(avian)
                }/>
                )}
            </div>

            <h3>Mammals</h3>
            <div>
                {mammals.map(mammal =>
                    <FontAwesomeIcon icon={`${mammal.image}`} size='5x' />
                )}
            </div>

            <h3>Aquatic</h3>
            <div>
                {aquatic.map(aquatic =>
                    <FontAwesomeIcon icon={`${aquatic.image}`} size='5x' />
                )}
            </div>

            <h3>Insects</h3>
            <div>
                {insects.map(insect =>
                    <FontAwesomeIcon icon={`${insect.image}`} size='5x' />
                )}
            </div>

            <h3>Mythic</h3>
            <div>
                {mythic.map(myth =>
                    <FontAwesomeIcon icon={`${myth.image}`} size='5x' />
                )}
            </div>

            <h3>???</h3>
            <div>
                {misc.map(misc =>
                    <FontAwesomeIcon icon={`${misc.image}`} size='5x' />
                )}
            </div>

            <Footer />
        </>
    )
}


// h1 tag that says mammals, then map through mammals array

// onClick to grab user_id 
// should be stored in localStorage