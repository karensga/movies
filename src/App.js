import React, { useEffect, useState } from 'react'

import './App.css'

import SectionMovie from './components/SectionMovie'
import MovieCard from './components/MovieCard'

function App () {
  const [movies, setMovie] = useState([])
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/all/week?api_key=40248d8fb6690b905d0e85d951e9d910', {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        setMovie(res.results.slice(0, 10))
      })
  }, [])

  return (
    <>
      <SectionMovie title={'Lo más visto'}>
          {
            movies?.map(movie => <MovieCard key={movie.id}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />)
            }
      </SectionMovie>
      <SectionMovie
        title={'Noche de pelis todos los días'}
        row={true}
        info={'¡Venite al cine sin salir de tu casa! Nunca más una noche predecible.'}
        subTitle={'NOCHE DE PELIS TODOS LOS'}
      >
          {
            movies?.map(movie => <MovieCard key={movie.id}
             image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />)
          }
      </SectionMovie>

    </>
  )
}

export default App
