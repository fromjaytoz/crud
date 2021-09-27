import styled from 'styled-components'

export const NavBarContainer = styled.div`
    align-items: flex-end;
    display: flex;
    height: 32px;
`

export const NavBarButton = styled.button`
    background: linear-gradient(#3B3330 2.2%, #6A5B59 39.9%, #20190F 104.52%);
    border: 1px solid #1A1719;
    color: #EFE3D3;

    font-family: 'Source Serif Pro', serif;
    font-size: 20px;
    padding: 2.4px 36px;
    padding: ${({ clicked }) => clicked && "5.8px 36px"};
    transition: 0.1s;

    :hover {
        cursor: pointer;
        text-shadow: 0 0px 4px rgba(255, 255, 255, 0.6);
    }
`