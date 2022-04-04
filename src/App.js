import React from 'react'

import './App.css'

import Home from './Pages/Home'
import Navbar from './components/Navbar'

import { ConfigContextProvider } from './context/config'

function App () {
  return (
    <ConfigContextProvider>
      <Navbar/>
      <Home/>
    </ConfigContextProvider>
  )
}

export default App
