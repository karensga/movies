import styled from 'styled-components'

export const MainMovie = styled.div`
    display: flex;
    position:relative;
    height: 80vh;
    align-items: center;
    margin-bottom: 20px;
    ${x => `background-image: url(${x.src});`}
    opacity: 1;
    will-change: opacity, transform;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    
`

export const Panel = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(20,20,20,.2); 
`

export const Image = styled.img`
    width: 100%;
    height: auto;
`
export const FilterDeg = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 7.5rem;
    background: linear-gradient(180deg,transparent,rgba(14,14,14,.6),#141414);
`

export const InfoBanner = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content:center;
    padding-bottom: unset;
    text-align: left;
    width: 100%;
    flex-direction: column;
    padding: 0 4vw 10vh;
    z-index: 1;
    background-color:transparent; 
    color: white;   
`

export const TitleBanner = styled.h1`
    background-color:transparent;
    font-size: 60px;
`

export const DescriptionBanner = styled.p`
    background-color:transparent;
    font-size: 1.2vw;
    max-width: 30vw;
    margin-top: 1vw;
`
