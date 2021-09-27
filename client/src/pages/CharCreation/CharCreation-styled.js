import styled from 'styled-components'

export const CharCreationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    display: grid;
    grid-template-columns: 240px 240px 240px;
    grid-template-rows: 428px auto;
    grid-template-areas: 
    "level avatar ."
    "proficiencies avatar skills";

    @media only screen and (max-width: 1040px) {
        justify-content: center;
        grid-template-columns: 240px;
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

    width: auto;
    justify-self: center;
`

export const FormLabel = styled.label`
    margin: ${({m}) => m };
`

export const AvatarContainer = styled.div`
    width: 100%;
    height: auto;

    margin-bottom: 36px;
    background: radial-gradient(72.62% 50% at 50% 50%, #F2EFF0 0%, #584E53 100%, #584E53 100%);
    box-shadow: 0px 0px 8px 0.4000000059604645px #79654D;
    padding: 2.8px 1.8px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 1.4px;
    border: none;
`

export const AvatarImage = styled.img`
    padding: 0;
    margin: 0;
    width: 98.4%;
    height: 98.4%;
    border: none;
    border-radius: 2.8px;
    box-shadow: 0px 0px 2.4px 1.08px #000000 inset;
`

export const LineBreak = styled.div`
    width: 100%;
    margin-top: 24px;
    margin-bottom: 40px;
    padding: 4px 0;
    border-bottom: 0.8px solid #251305;
    border-top: 0.8px solid #251305;
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