import React from 'react'
import { Link } from 'react-router-dom'
import './AdoptZone.css'

import StyledHeader from '../components/StyledHeader'
import Footer from '../components/Footer'
import { mammals, avians, mythic, aquatic, insects, misc } from '../assets/PetSpecies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { postPet } from '../services/pets'

export default function AdoptZone(props) {
    const handleClick = (petData) => {
        postPet(petData)
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
            <div className='species-container'>
                <header>
                    <h1 className='adopt-zone'>Adoption Zone</h1>
                    <h3>Click a creature to take them home</h3>
                </header>


                <h3 className='species-name'>Avians</h3>
                <div>
                    {avians.map(avian =>
                        <FontAwesomeIcon icon={`${avian.image}`} size='5x'
                            onClick={() => handleClick(avian)
                            } className='species-pet' />
                    )}
                </div>

                <h3 className='species-name'>Mammals</h3>
                <div>
                    {mammals.map(mammal =>
                        <FontAwesomeIcon icon={`${mammal.image}`} size='5x'
                            onClick={() => handleClick(mammal)
                            } className='species-pet' />
                    )}
                </div>

                <h3 className='species-name'>Aquatic</h3>
                <div>
                    {aquatic.map(aquatic =>
                        <FontAwesomeIcon icon={`${aquatic.image}`} size='5x'
                            onClick={() => handleClick(aquatic)
                            } className='species-pet' />
                    )}
                </div>

                <h3 className='species-name'>Insects</h3>
                <div>
                    {insects.map(insect =>
                        <FontAwesomeIcon icon={`${insect.image}`} size='5x'
                            onClick={() => handleClick(insect)
                            } className='species-pet' />
                    )}
                </div>

                <h3 className='species-name'>Mythic</h3>
                <div>
                    {mythic.map(myth =>
                        <FontAwesomeIcon icon={`${myth.image}`} size='5x'
                            onClick={() => handleClick(myth)
                            } className='species-pet' />
                    )}
                </div>

                <h3 className='species-name'>???</h3>
                <div>
                    {misc.map(misc =>
                        <FontAwesomeIcon icon={`${misc.image}`} size='5x'
                            onClick={() => handleClick(misc)
                            } className='species-pet' />
                    )}
                </div>
            </div>

            <Footer />
        </>
    )
}