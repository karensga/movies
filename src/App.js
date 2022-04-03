import React from 'react'

import './App.css'

import Home from './Pages/Home'

import { ConfigContextProvider } from './context/config'

function App () {
  return (
    <ConfigContextProvider>

      <Home/>
    </ConfigContextProvider>
  )
}

export default App
