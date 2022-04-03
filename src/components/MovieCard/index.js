import React from 'react'

import PropTypes from 'prop-types'

import { Container, Image, A, Title, Genre } from './style'

const MovieCard = ({ image, poster, title }) => {
  return (
    <Container poster={poster}>
      <A>
        <Title>{title}</Title>
        <Genre></Genre>
      </A>
      <Image src={image}/>
    </Container>
  )
}

MovieCard.propTypes = {
  image: PropTypes.string,
  poster: PropTypes.bool,
  title: PropTypes.string
}

export default MovieCard
