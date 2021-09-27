import styled from 'styled-components'
import paperBg from './assets/paper-bg.png'

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
    background-image: url(${paperBg});
    padding: 80px 100px;
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    image-rendering: -webkit-optimize-contrast;
`