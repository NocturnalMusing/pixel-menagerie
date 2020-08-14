import React, { useState, useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import './App.css'
import { verifyUser } from './services/auth'
import { removeToken } from './services/auth'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCrow, faDove, faKiwiBird, faDog, faCat, faHorse, faHippo,
  faDragon, faOtter, faFrog, faFish, faSpider, faBug, faBreadSlice } 
  from '@fortawesome/free-solid-svg-icons'
import LandingPage from './screens/LandingPage'
import SignUpPage from './screens/SignUpPage'
import UserPage from './screens/UserPage'
import AdoptZone from './screens/AdoptZone'
import PetDetail from './screens/PetDetail'
import PetEdit from './screens/PetEdit'

function App() {
  library.add(
    faCrow, faDove, faKiwiBird,
    faDog, faCat, faHorse, faHippo,
    faDragon,
    faOtter, faFrog, faFish,
    faSpider, faBug,
    faBreadSlice
    )

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    handleVerify()
  }, [])

  const handleVerify = async () => {
    const userData = await verifyUser();
    setCurrentUser(userData);
  }

  const history = useHistory()

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
    history.push('/')
  }


  return (
    <>
      <Route exact path='/' render={(props) => (
        <LandingPage
          {...props}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser} />
      )} />
      <Route exact path='/signup' render={(props) => (
        <SignUpPage
          {...props}
          setCurrentUser={setCurrentUser} />
      )} />
      <Route exact path='/user/:username' render={(props) => (
        <UserPage
          {...props}
          setCurrentUser={setCurrentUser} 
          currentUser={currentUser}
          handleLogout={handleLogout}/>
      )} />
      <Route exact path='/pet/adoption-zone' render={(props) => (
        <AdoptZone
          {...props} 
          currentUser={currentUser}
          handleLogout={handleLogout}/>
      )} />
      <Route exact path='/user/:user_id/pet/:id' render={(props) => (
        <PetDetail 
        {...props} 
        currentUser={currentUser} />
      )} />
      <Route exact path='/user/:user_id/pet/:id/edit' render={(props) => (
        <PetEdit 
        {...props} />
      )} />
    </>
  );
}

export default App;
