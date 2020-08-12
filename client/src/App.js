import React from 'react'
import { Link, Route } from 'react-router-dom'
import './App.css'

import StyledHeader from './components/StyledHeader'

function App() {
  return (
    <>
      <StyledHeader>
        <Link>I'm A Link</Link>
      </StyledHeader>
    </>
  );
}

export default App;
