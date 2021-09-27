import styled from 'styled-components'
import largePaperBg from './assets/large-paper-bg.png'
import mediumPaperBg from './assets/medium-paper-bg.png'
import smallPaperBg from './assets/small-paper-bg.png'

export const AppView = styled.div`
    display: flex;
    width: 100vw;
    margin: 100px 0;
    height: auto;
    
    justify-content: center;
`

export const NavBarContentContainer = styled.div`
    width: 88vw;
    max-width: 1300px;
`

export const ContentContainer = styled.div`
    background-image: url(${largePaperBg});
    padding: 80px 100px;
    height: auto;
    min-height: 600px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    image-rendering: -webkit-optimize-contrast;

    @media only screen and (max-width: 1040px) {
        background-image: url(${mediumPaperBg});
    }

    @media only screen and (max-width: 800px) {
        background-image: url(${smallPaperBg});
    }
`