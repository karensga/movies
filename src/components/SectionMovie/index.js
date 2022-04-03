import React, { useRef } from 'react'

import PropTypes from 'prop-types'

import MovieCard from '../MovieCard'

import { Section, Title, ContainerMovies, SectionTitle, Span, Info, ButtonMax, ButtonLeft, ButtonRight } from './style'

const SectionMovie = ({ title, row = false, info, subTitle, movies, poster = true }) => {
  const ref = useRef()
  return (
    <Section className={`${row && 'row'}`} >
      <ButtonLeft onClick={() => {
        const scrollContainer = ref.current
        scrollContainer.scrollLeft -= screen.width
      }}>
       <i className="fa-solid fa-angle-left"></i>
        </ButtonLeft>
        <Title>{title}</Title>
        <ContainerMovies ref={ref}>
        <SectionTitle >
          <Span>{subTitle}</Span>
          <Title>{title}</Title>
          <Info>
            {info}
          </Info>
          <ButtonMax>
            Ver mas
          </ButtonMax>
        </SectionTitle>
          {
            movies?.map(movie => <MovieCard
              key={movie.id}
              poster={poster}
              title={movie.original_title}
              image={`https://image.tmdb.org/t/p/w1280${poster ? movie.poster_path : movie.backdrop_path}`}
            />)
          }
        </ContainerMovies>
        <ButtonRight onClick={() => {
          const scrollContainer = ref.current
          scrollContainer.scrollLeft += screen.width
        }}><i className="fa-solid fa-angle-right"></i>
          </ButtonRight>
    </Section>
  )
}

SectionMovie.propTypes = {
  title: PropTypes.string,
  row: PropTypes.bool,
  info: PropTypes.string,
  subTitle: PropTypes.string,
  movies: PropTypes.array,
  poster: PropTypes.bool
}

export default SectionMovie
