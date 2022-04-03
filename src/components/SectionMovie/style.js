import styled from 'styled-components'

export const Section = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction:column;
    overflow: auto;
    margin-bottom:50px; 
    
    &.row {
        flex-direction:row;
    }

    &::-webkit-scrollbar {
        -webkit-appearance: none;
    }

`

export const ContainerMovies = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    padding-left: 50px;
    padding-bottom: 0;
    position: relative;
    
    &::-webkit-scrollbar {
        -webkit-appearance: none;
    }

    
`
export const Button = styled.button`
   position: absolute;
   border:0;
   top:51px;
   width: 55px;
   height: 300px;
   z-index:20;
   background: rgba(0,0,0,.6);
   color: white;
   display: none;

   &:hover {
       background: rgba(0,0,0,.8);
   }

   & i {
       font-size: 32px;
      background: rgba(255,255,255,.01)
   }

   ${Section}.row & {
    top:0px;
   }

   ${Section}:hover & {
    display: block;
   }
`

export const ButtonLeft = styled(Button)`
    left:0;
`

export const ButtonRight = styled(Button)`
    right:0;
`

export const SectionTitle = styled.div`
   display: none;
   padding-right: 55px;

   ${Section}.row &{
       display: flex;
       flex-direction: column;
       justify-content: center;
       width: 400px;
   }

   & h1{
       display: block;  
   }
`

export const Title = styled.h1`
    font-size:21px;
    padding: 10px 0;
    color: white;

    ${Section}.row & {
        display: none;
    }

    ${Section}.row  ${SectionTitle} & {
        display: block;
        padding-left: 0px;
    }

    ${Section} & {
        padding-left: 55px;
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
