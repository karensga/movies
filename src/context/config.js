import React, { useState, createContext } from 'react'

import PropTypes from 'prop-types'

const Context = createContext()
export const ConfigContextProvider = ({ children }) => {
  const [genres, setGenres] = useState([])
  const [isEnableInfoMovie, setIsEnableInfoMovie] = useState(false)
  const [movieId, setMovieId] = useState(null)

  const toggleInfoMovie = () => {
    setIsEnableInfoMovie(!isEnableInfoMovie)
  }

  return (
    <Context.Provider value={{
      genres,
      setGenres,
      isEnableInfoMovie,
      toggleInfoMovie,
      movieId,
      setMovieId
    }}>
        {children}
    </Context.Provider>
  )
}

ConfigContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default Context
