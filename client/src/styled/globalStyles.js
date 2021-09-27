import { createGlobalStyle } from 'styled-components';
import tableBg from '../assets/table-bg.jpeg'
 
const GlobalStyle = createGlobalStyle`
  body {
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.6)), url(${tableBg});
    color: #251305;
    font-family: 'Source Serif Pro', serif;
    font-size: 17.4px;
    margin: 0;
    padding: 0;
    text-shadow: 0px 0px 0.8px #392F21;
  }
`;
 
export default GlobalStyle;