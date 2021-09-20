import styled from "styled-components";

export const TextInputSpacing = styled.div`
  margin: 4px 0 12px 0;
  margin: ${({ m }) => m};
`;

export const TextInputTopContainer = styled.div`
  width: 200px;
  height: 20px;
  display: ${({ d }) => d};
  margin-left: auto;
  margin-right: auto;
`;

export const TextInputTopDesign = styled.img`
  image-rendering: -webkit-optimize-contrast;
  width: 100%;
  height: 100%;
`;

export const TextInputContainer = styled.div`
  background: radial-gradient(
    72.62% 50% at 50% 50%,
    #f2eff0 0%,
    #584e53 100%,
    #584e53 100%
  );
  border-radius: 1.4px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
`;

export const TextInput = styled.input`
  outline: none;
  font-family: "Source Serif Pro", serif;
  font-weight: 500;
  font-size: 14.8px;

  padding: 4px 8px;
  border: none;
  border-radius: 0.8px;
  margin: 2.8px 1.8px;

  width: 91.4%;

  box-shadow: 0px 0px 2.4px 1.08px #000000 inset;
  opacity: 0.98;
`;

export const TextInputBottomContainer = styled.div`
  width: 200px;
  height: 20px;
  display: ${({ d }) => d};

  margin-left: auto;
  margin-right: auto;
`;

export const TextInputBottomDesign = styled.img`
  image-rendering: -webkit-optimize-contrast;
  width: 100%;
  height: 100%;
`;
