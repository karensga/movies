import React from 'react'

import PropTypes from 'prop-types'

import { Section, Title, ContainerMovies, SectionTitle, Span, Info, ButtonMax } from './style'

const SectionMovie = ({ children, title, row = false, info, subTitle }) => {
  return (
    <Section className={`${row && 'row'}`}>
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
        <ContainerMovies>
          {children}
        </ContainerMovies>
    </Section>
  )
}

SectionMovie.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  row: PropTypes.bool,
  info: PropTypes.string,
  subTitle: PropTypes.string
}

export default SectionMovie
