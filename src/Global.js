import { createGlobalStyle } from "styled-components";
import bgImg from "./img/bg2.jpg";
import bg from "./img/bg.jpg";
import "./reset.css";
const GlobalStyle = createGlobalStyle`
body{
  background-image: url(${bg});
  background-size:cover ;
  height:100vh ;
  background-repeat: no-repeat ;
  font-family: sans-serif;
  min-width:auto;
   
}
html {
     -webkit-text-size-adjust: none;
     -moz-text-size-adjust: none; 
     -ms-text-size-adjust: none;  
     -o-text-size-adjust: none; 
}

`;

export default GlobalStyle;
