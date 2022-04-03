import React, { useContext } from 'react'

import PropTypes from 'prop-types'

import { Container, Image, A, Title, Genre } from './style'

import ContextConfig from '../../context/config'

const MovieCard = ({ image, poster, title, genresIds = [] }) => {
  const { genres } = useContext(ContextConfig)

  return (
    <Container poster={poster}>
      <A>
        <Title>{title}</Title>
        <Genre>{genresIds?.map(x => genres.find(genre => genre.id === x)?.name).join(' • ')}</Genre>
      </A>
      <Image src={image}/>
    </Container>
  )
}

MovieCard.propTypes = {
  image: PropTypes.string,
  poster: PropTypes.bool,
  title: PropTypes.string,
  genresIds: PropTypes.array
}

export default MovieCard
