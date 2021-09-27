import { createGlobalStyle } from 'styled-components';
import tableBg from '../assets/table-bg.jpeg'
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${tableBg});
    font-family: 'Source Serif Pro', serif;
    font-size: 17.4px;
    color: #251305;
    text-shadow: 0px 0px 0.8px #392F21;
  }
`;
 
export default GlobalStyle;