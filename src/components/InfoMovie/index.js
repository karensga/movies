import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { Container, SectionAbout, Title, About, ContainerMain, TitleInfo, B, Info, Label, Description, Image } from './style'

const InfoMovie = ({ id }) => {
  const [movie, setMovue] = useState({})
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/634649?api_key=40248d8fb6690b905d0e85d951e9d910&language=en-US')
      .then(res => res.json())
      .then(res => setMovue(res))
  }, [])

  return (
    <Container>
        <ContainerMain>
            <Image src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}/>
            <SectionAbout>
                <Title>{movie.original_title}</Title>
                <About>{movie.overview}</About>
                <hr></hr>
                <TitleInfo>Info on <B>{movie.original_title}</B></TitleInfo>
                <Info>
                    <Label>Genres: </Label>
                    <Description>{movie?.genres?.map(x => x.name).join(', ')}</Description>
                </Info>
                <Info>
                    <Label>Release date: </Label>
                    <Description>{movie?.release_date}</Description>
                </Info>
                <Info>
                    <Label>Average vote: </Label>
                    <Description>{movie?.vote_average}</Description>
                </Info>
                <Info>
                    <Label>Original language: </Label>
                    <Description>{movie?.original_language}</Description>
                </Info>
                <Info>
                    <Label>Age classification: </Label>
                    <Description></Description>
                </Info>
            </SectionAbout>
        </ContainerMain>
    </Container>
  )
}

InfoMovie.propTypes = {
  id: PropTypes.number
}

export default InfoMovie
