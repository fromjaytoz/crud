import styled from 'styled-components'

export const CharCreationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    grid-template-areas: 
    "level avatar header"
    "proficiencies skills";
`

export const CharCreationForm = styled.form`
    display: flex;
    flex-direction: column;
`

export const TextInput = styled.input`
    outline: none;
`

export const AvatarContainer = styled.div`
    width: 160px;
    height: auto;
`

export const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    border: 2.8px solid #64565B;
`

export const Button = styled.button`
    width: 29.4px;
    width: ${({w}) => w};
    height: 29.4px;
    padding: 1.8px 7.4px;

    font-size: 16px;
    font-family: 'Source Serif Pro', serif;
    text-align: center;
    color: #EEEEEE;
    background: radial-gradient(50% 50% at 50% 50%, #6F6167 0%, #4D4448 100%);
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
        padding: 2.8px 8.4px;
        filter: brightness(110.4%);
    }
`

export const LineBreak = styled.div`
    width: 100%;
    margin-top: 24px;
    padding:4px 0;
    border-bottom: 0.8px solid white;
    border-top: 0.8px solid white;
`