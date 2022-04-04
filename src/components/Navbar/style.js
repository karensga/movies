import styled from 'styled-components'

export const Header = styled.header`
    position: fixed;
    box-sizing: border-box;
    z-index: 10;
    width: 100%;
    height: 70px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 4vw;
    background-image: linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent);
    transition: all .2s ease-out;
    z-index:10;
    background-color:transparent; 
    font-size:21px;
    font-weight: 800;
    color: white; 
`

export const Nav = styled.nav`
    background-color:transparent; 
    margin-left:32px; 
`
export const Name = styled.span`
    background-color:transparent; 
`
export const Ul = styled.ul`
    background-color:transparent; 
    display: flex;
    list-style:none;
`

export const Li = styled.li`
    background-color:transparent; 
    text-decoration: none;
    margin-left: 20px; 
    font-weight: 400;
`

export const Search = styled.ul`
background-color:transparent; 

`

export const I = styled.i`
background-color:transparent; 
`
