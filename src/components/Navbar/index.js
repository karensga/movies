import React, { useEffect, useState } from 'react'

import { Header, Nav, Name, Ul, Li, Search, I } from './style'

const Navbar = () => {
  const [scroll, setScroll] = useState()
  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScroll(window.scrollY)
    })

    return () => {
      document.removeEventListener('scroll', () => {
        setScroll(window.scrollY)
      })
    }
  })

  return (
    <Header className={`${scroll > 0 && 'sticky'}`}>
        <Name>MOVIE</Name>
        <Nav>
            <Ul>
                <Li>Home</Li>
                <Li>Movies</Li>
                <Li>Tv shows</Li>
            </Ul>
        </Nav>
        <Search>
            <I className="fa-solid fa-magnifying-glass"></I>
        </Search>
    </Header>
  )
}

export default Navbar
