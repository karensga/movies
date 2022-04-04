import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0;     
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    z-index:100;

    ${x => !x.open && 'display: none;'}

   
`

export const ContainerMain = styled.div`
    background: #141414;
    width: 57%;
    height: 85%;
    color: white;
    overflow: auto;
    position: relative; 

    &::-webkit-scrollbar {
        display: none;
    }

    &::-webkit-scrollbar-thumb:vertical{
        background: #000;
        border-radius: 10px;
        border: 5px solid gray;
    }
`

export const SectionAbout = styled.div`
    background-color: transparent;
    padding: 24px 32px;

`

export const Title = styled.h1`
    background-color: transparent;
    font-size: 26px;
    line-height: 1.4;
    font-weight: 600;
    margin-bottom: 15px;
`

export const About = styled.p`
    background-color: transparent;
    font-size: 16px;
    line-height: 1.5;
`

export const TitleInfo = styled.h4`
    background-color: transparent;
    font-size: 20px;
    line-height: 1.4;
    font-weight: 400;
    margin-bottom: 15px;
`
export const B = styled.b`
    background-color: transparent;
`
export const Info = styled.div`
    background-color: transparent;
    font-size: 14px;
    line-height: 1.5;
    margin: 0.5em 0.5em 0.5em 0;
    word-break: break-word;
`
export const Label = styled.span`
    background-color: transparent;
    color: #777;
`

export const Description = styled.span`
    background-color: transparent;
`
export const Image = styled.img`
    width: 100%;
`
export const ButtonClose = styled.button`
    background-color: transparent;
    position:absolute;
    right:15px;
    top:15px;
    color:white;
    width: 40px;
    height: 40px;
    font-size: 28px;
    border:0;
    cursor:pointer;
    z-index:10;
`

export const I = styled.i`
    background-color: transparent;
`
export const Hr = styled.hr`
    margin: 24px 0;
    border-color: hsla(0,0%,47.5%,.7);
`
export const ContainerImage = styled.div`
    position: relative;
    background-color: transparent;
    width: 100%;
    height: auto;
`
export const ImageDeg = styled.div`
    position: absolute;
    bottom: 6px;
    left: 0;
    width: 100%;
    height: 20%;
    background: linear-gradient(180deg,transparent,rgba(14,14,14,.6),#181818);
`
