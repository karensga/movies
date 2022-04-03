import styled from 'styled-components'

export const Container = styled.div`
    width: auto;
    height: 300px;
    margin: 0 7px;
    position: relative;
    background-color: transparent;
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
`

export const A = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:flex-end;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index:10;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 10px;
    ${Container}:hover &{
        background: rgba(0,0,0,.5);
        cursor: pointer;
    }
`

export const Title = styled.h1`
    display:none;

    ${Container}:hover ${A} &{
        display:block;
        height: auto;
        color: white;
        background-color: transparent;
        cursor: pointer;
        font-size:18px; 
    }
`
export const Genre = styled.span`
    display:none;
    ${Container}:hover ${A} &{
        display:block;
        height: auto;
        color: white;
        background-color: transparent;
        cursor: pointer;
        font-size:21px; 
    }
`
