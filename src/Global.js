import { createGlobalStyle } from "styled-components";
import bgImg from "./img/bg2.jpg";
const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  background-image: url(${bgImg});
  background-size:cover ;
  background-repeat: no-repeat ;
 

  
   
}
`;

export default GlobalStyle;
