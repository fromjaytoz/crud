import styled from 'styled-components'

export const TextInputContainer = styled.div`
    background: radial-gradient(72.62% 50% at 50% 50%, #F2EFF0 0%, #584E53 100%, #584E53 100%);
    border-radius: 1.4px;
    border: none;
    
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 4px 0 12px 0;
    margin: ${({m}) => m };
`

export const TextInput = styled.input`
    outline: none;
    font-family: 'Source Serif Pro', serif;
    font-weight: 500;
    font-size: 14.8px;

    padding: 4px 8px;
    border: none;
    border-radius: 0.8px;
    margin: 2.8px 1.8px;

    width: 91.4%;

    box-shadow: 0px 0px 2.4px 1.08px #000000 inset;
    opacity: 0.98;
`