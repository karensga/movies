import React from 'react'

import PropTypes from 'prop-types'

import { Container, Image, A } from './style'

const MovieCard = ({ image }) => {
  return (
    <Container>
      <A/>
      <Image src={image}/>
    </Container>
  )
}

MovieCard.propTypes = {
  image: PropTypes.string
}

export default MovieCard
