import React from 'react'
import { Link, Route } from 'react-router-dom'
import './App.css'

import LandingPage from './screens/LandingPage'

function App() {
  return (
    <>
      <Route exact to='/'>
        <LandingPage/>
      </Route>
    </>
  );
}

export default App;
