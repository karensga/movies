import styled from 'styled-components'

export const Container = styled.div`
    width: 200px;
    height: 300px;
    margin: 0 7px;
    position: relative:
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
`

export const A = styled.a`
    position: absolute;
    width: 200px;
    height: 300px;
    z-index:10;
    background-color: rgba(0, 0, 0, 0.1);

    ${Container}:hover &{
        background: rgba(0,0,0,.7);
        cursor: pointer;
    }
`
