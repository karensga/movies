import React, { useEffect, useState, useContext } from 'react'

import SectionMovie from '../../components/SectionMovie'
import ContextConfig from '../../context/config'

import InfoMovie from '../../components/InfoMovie'

import { MainMovie, FilterDeg, TitleBanner, DescriptionBanner, InfoBanner, Panel } from './style'

const Home = () => {
  const { setGenres, isEnableInfoMovie } = useContext(ContextConfig)

  const [moviesTrending, setMovieTrending] = useState([])
  const [moviesAction, setMovieAction] = useState([])
  const [moviesComedy, setMovieComedy] = useState([])
  const [moviesAdventure, setMovieAdventure] = useState([])
  const [moviesDocumentary, setMovieDocumentary] = useState([])
  const [moviesFamily, setMovieFamily] = useState([])
  const [moviesHistory, setMovieHistory] = useState([])
  const [moviesRomance, setMovieRomance] = useState([])
  const [moviesTVMovie, setMovieTVMovie] = useState([])
  const [moviesHorror, setMovieHorror] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=40248d8fb6690b905d0e85d951e9d910')
      .then(res => res.json())
      .then(res => setGenres(res.genres))

    fetch('https://api.themoviedb.org/3/trending/all/week?api_key=40248d8fb6690b905d0e85d951e9d910', {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        setMovieTrending(res.results.slice(0, 10))
      })
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=40248d8fb6690b905d0e85d951e9d910&with_genres=28&page=1', {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        setMovieAction(res.results)
      })
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=40248d8fb6690b905d0e85d951e9d910&with_genres=35&page=2', {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        setMovieComedy(res.results)
      })
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=40248d8fb6690b905d0e85d951e9d910&with_genres=12&page=2', {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        setMovieAdventure(res.results)
      })
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=40248d8fb6690b905d0e85d951e9d910&with_genres=99&page=1', {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        setMovieDocumentary(res.results)
      })
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=40248d8fb6690b905d0e85d951e9d910&with_genres=10751&page=2', {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        setMovieFamily(res.results)
      })
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=40248d8fb6690b905d0e85d951e9d910&with_genres=36&page=1', {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        setMovieHistory(res.results)
      })

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=40248d8fb6690b905d0e85d951e9d910&with_genres=10749&page=1', {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        setMovieRomance(res.results)
      })

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=40248d8fb6690b905d0e85d951e9d910&with_genres=10770&page=2', {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        setMovieTVMovie(res.results)
      })

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=40248d8fb6690b905d0e85d951e9d910&with_genres=27&page=1', {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        setMovieHorror(res.results)
      })
  }, [])

  /*   console.log(genres.find(genre => genre.id === 36).name) */

  return (
    <>
    <MainMovie src={`https://image.tmdb.org/t/p/original${moviesHistory[4]?.backdrop_path}`}>
      <FilterDeg/>
      <InfoBanner>
        <TitleBanner>{moviesHistory[4]?.original_title}</TitleBanner>
        <DescriptionBanner>{moviesHistory[4]?.overview}</DescriptionBanner>
      </InfoBanner>
      <Panel/>
    </MainMovie>
    <InfoMovie open={isEnableInfoMovie}/>
    <SectionMovie
      title={'Lo más visto'}
      row={true}
      info={'El TOP 10 de películas y series que son tendencia en tu país esta semana.'}
      subTitle={'NO TE LOS PIERDAS'}
      movies={moviesTrending}
    />
    <SectionMovie title={'Familiares'} movies={moviesFamily}/>
    <SectionMovie title={'Comedia'} movies={moviesComedy} poster={false}/>
    <SectionMovie title={'Adventura'} movies={moviesAdventure}/>
    <SectionMovie
      title={'Lo más visto'}
      row={true}
      info={'El TOP 10 de películas y series que son tendencia en tu país esta semana.'}
      subTitle={'NO TE LOS PIERDAS'}
      movies={moviesHorror}
    />
    <SectionMovie title={'TV'} movies={moviesTVMovie} poster={false}/>
    <SectionMovie title={'Accion'} movies={moviesAction}/>
    <SectionMovie title={'Documentales'} movies={moviesDocumentary}/>
    <SectionMovie
      title={'Lo más visto'}
      row={true}
      info={'El TOP 10 de películas y series que son tendencia en tu país esta semana.'}
      subTitle={'NO TE LOS PIERDAS'}
      movies={moviesHistory}
    />
    <SectionMovie title={'Romance'} movies={moviesRomance}/>
  </>
  )
}

export default Home
