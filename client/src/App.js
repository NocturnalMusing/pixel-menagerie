import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { verifyUser } from './services/auth'

import LandingPage from './screens/LandingPage'
import SignUpPage from './screens/SignUpPage'
import UserPage from './screens/UserPage'

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    handleVerify()
  }, [])

  const handleVerify = async () => {
    const userData = await verifyUser();
    setCurrentUser(userData);
  }

  return (
    <>
      <Route exact path='/' render={(props) => (
        <LandingPage
          {...props}
          setCurrentUser={setCurrentUser} />
      )} />
      <Route path='/signup' render={(props) => (
        <SignUpPage
          {...props}
          setCurrentUser={setCurrentUser} />
      )} />
      <Route path='/:username' render={(props) => (
        <UserPage
          {...props} />
      )} />
      <Route path='/adoption-zone' render={(props) => (
        <UserPage //CHANGE ME TO ADOPTZONE
          {...props} />
      )} />
    </>
  );
}

export default App;
