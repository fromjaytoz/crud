import styled from 'styled-components'

export const CharCreationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    display: grid;
    grid-template-columns: 240px 240px 240px;
    grid-template-rows: 428px 428px;
    grid-template-areas: 
    "level avatar ."
    "proficiencies avatar skills";

    @media only screen and (max-width: 1040px) {
        grid-template-columns: auto;
        grid-template-rows: auto;
        grid-template-areas: 
        "avatar"
        "level"
        "proficiencies"
        "skills";
    }
`

export const CharacterLevelContainer = styled.div`
    height: auto;
    grid-area: level;
`

export const CharCreationForm = styled.form`
    display: flex;
    flex-direction: column;
    grid-area: avatar;

    width: 240px;
    justify-self: center;
`

export const FormLabel = styled.label`
    margin: ${({m}) => m };
`

export const AvatarContainer = styled.div`
    width: 97.4%;
    height: auto;

    margin-bottom: 36px;
`

export const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    border: 2.8px solid #64565B;
`

export const LineBreak = styled.div`
    width: 100%;
    margin-top: 24px;
    margin-bottom: 40px;
    padding:4px 0;
    border-bottom: 0.8px solid white;
    border-top: 0.8px solid white;
`

export const ProficienciesContainer = styled.div`
    height: auto;
    grid-area: proficiencies;
`

export const SkillsContainer = styled.div`
    height: auto;
    grid-area: skills;
`

// export const PointsContainer = styled.div`
//     height: auto;
//     grid-area: ${({ga}) => ga };
//     margin-top: 48px;
//     text-align: center;
// `