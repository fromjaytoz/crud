import styled from 'styled-components'

export const Header = styled.h1`
    font-size: 24px;

    font-size: ${({fs}) => fs };
    font-weight: ${({fw}) => fw };
    margin: ${({m}) => m };
    color: ${({cl}) => cl };
    height: ${({ht}) => ht };
    text-align: ${({ta}) => ta};

    @media only screen and (max-width: 410px) {
        font-size: 20px;
        font-size: ${({mqfs}) => mqfs };
    }
`

export const RegularText = styled.p`
    font-size: 16.8px;
    margin: 0;
    padding: 0;

    margin: ${({m}) => m };
    font-size: ${({fs}) => fs };
    color: ${({cl}) => cl };
    width: ${({w}) => w };
    text-align: ${({ta}) => ta};

    @media only screen and (max-width: 410px) {
        font-size: 14.4px;
        font-size: ${({fmqfs}) => fmqfs };
    }
`