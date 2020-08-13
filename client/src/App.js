import React from 'react'
import { Link, Route } from 'react-router-dom'
import './App.css'

import LandingPage from './screens/LandingPage'
import SignUpPage from './screens/SignUpPage'

function App() {
  return (
    <>
      <Route exact path='/'>
        <LandingPage/>
      </Route>
      <Route path='/signup'>
        <SignUpPage />
      </Route>
    </>
  );
}

export default App;
