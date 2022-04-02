import styled from 'styled-components'

export const Section = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    /* padding-left: 55px; */
    
    &.row {
        flex-direction:row;
    }
    
`
export const Title = styled.h1`
    font-size:21px;
    padding: 10px 0;
    color: white;
    
`

export const ContainerMovies = styled.div`
    display: flex;
    width: 200%;
    padding-left: 50px;
    margin-bottom:50px; 
`
export const Button = styled.button`
   position: absolute;
   border:0;
   width: 55px;
   height: 100%;

   &:hover {
       background: rgba(0,0,0,.8);
   }
`
export const SectionTitle = styled.div`

   padding-left: 55px;

   ${Section}.row &{
       display: flex;
       flex-direction: column;
       justify-content: center;
       width: 400px;
   }
`
export const Span = styled.div`
    color:rgba(255, 255, 255, 0.7);
    width: 400px;
    font-size:12px;
`
export const Info = styled.div`
   width: 100%;
   color: white;
`

export const ButtonMax = styled.button`
    display: none;

    ${Section}.row &{
        display: block;
        background: #4915C9;
        border:0;
        border-radius: 40px;
        width: 166px;
        height: 44px;
        font-size:14px;
        margin-top:20px;
        color:white;
    }
   
`
