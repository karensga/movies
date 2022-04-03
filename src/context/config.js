import React, { useState, createContext } from 'react'

import PropTypes from 'prop-types'

const Context = createContext()
export const ConfigContextProvider = ({ children }) => {
  const [genres, setGenres] = useState([])

  return (
    <Context.Provider value={{
      genres,
      setGenres
    }}>
        {children}
    </Context.Provider>
  )
}

ConfigContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default Context
