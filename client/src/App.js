import React from 'react'
import { Link, Route } from 'react-router-dom'
import './App.css'

import StyledHeader from './components/StyledHeader'
import StyledButton from './components/StyledButton'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <StyledHeader>
        <Link>I'm A Link</Link>
      </StyledHeader>
      <StyledButton>
        ButtonFill
      </StyledButton>
    </>
  );
}

export default App;
