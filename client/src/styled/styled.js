import styled from 'styled-components'

export const Header = styled.h1`
    font-size: 24px;
    letter-spacing: 0.0012em;

    font-size: ${({fs}) => fs };
    font-weight: ${({fw}) => fw };
    margin: ${({m}) => m };
    margin: 0 0 8px 0;
    color: ${({cl}) => cl };
    height: ${({ht}) => ht };
    text-align: ${({ta}) => ta};

    @media only screen and (max-width: 410px) {
        font-size: 20px;
        font-size: ${({mqfs}) => mqfs };
    }
`

export const RegularText = styled.p`
    font-weight: 500;
    letter-spacing: 0.0012em;
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

export const Button = styled.button`
    width: 29.4px;
    width: ${({w}) => w};
    height: 29.4px;
    padding: 1.8px 7.4px;
    margin: ${({m}) => m};

    font-size: 18.8px;
    font-family: 'Source Serif Pro', serif;
    text-align: center;
    color: #EEEEEE;
    background: radial-gradient(50% 50% at 50% 50%, #6F6167 0%, #4D4448 100%);
    background: ${({bg}) => bg};
    border: 1.4px solid #241F22;
    border-radius: 2.4px;
    box-shadow: 0.8px 0.8px 4px rgba(0, 0, 0, 0.25), inset -2.4px -2.4px 4px rgba(0, 0, 0, 0.25);
    
    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.1s;
    
    :hover {
        cursor: pointer;
        box-shadow: 1.4px 1.4px 4px rgba(0, 0, 0, 0.25), inset -2.4px -2.4px 4px rgba(0, 0, 0, 0.25);
        filter: brightness(110.4%);
    }
`