import React, { useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'

import ContextConfig from '../../context/config'
import { Container, SectionAbout, Title, About, ContainerMain, TitleInfo, B, Info, Label, Description, Image, ButtonClose, I, Hr, ContainerImage, ImageDeg } from './style'

const InfoMovie = ({ open }) => {
  const [movie, setMovue] = useState({})
  const { movieId, toggleInfoMovie } = useContext(ContextConfig)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=40248d8fb6690b905d0e85d951e9d910&language=en-US`)
      .then(res => res.json())
      .then(res => setMovue(res))
  }, [movieId])

  return (
    <Container open={open}>
        <ContainerMain>
            <ButtonClose onClick={toggleInfoMovie}><I className="fa-solid fa-xmark"></I></ButtonClose>
            <ContainerImage>
                <Image src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}/>
                <ImageDeg/>
            </ContainerImage>
            <SectionAbout>
                <Title>{movie.original_title}</Title>
                <About>{movie.overview}</About>
                <Hr></Hr>
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
  open: PropTypes.bool
}

export default InfoMovie
