import React from 'react'

import { Header, Nav, Name, Ul, Li, Search, I } from './style'

const Navbar = () => {
  return (
    <Header>
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
