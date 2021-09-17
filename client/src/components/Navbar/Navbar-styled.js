import styled from 'styled-components'

export const NavBarContainer = styled.div`
    height: 32px;

    display: flex;
    align-items: flex-end;
`

export const NavBarButton = styled.button`
    background: radial-gradient(249.04% 249.04% at 50% 50%, #161215 0%, #BEADAE 100%);
    border: 1px solid #1A1719;
    font-family: 'Source Serif Pro', serif;
    color: white;

    font-size: 20px;
    padding: 2.4px 36px;
    transition: 0.1s;

    padding: ${({ clicked }) => clicked && "5.8px 36px"};

    :hover {
        cursor: pointer;
        text-shadow: 0 0px 4px rgba(255, 255, 255, 0.6);
    }
`