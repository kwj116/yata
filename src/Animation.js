import { keyframes } from "styled-components";

const ani = keyframes`
0%{
 opacity:0;
}
50%{
opacity:0.5;
transform: translateY(-5%); 
}
100%{
  opacity:0.7;
  transform: translateY(0);
}`;

const slide = keyframes`
from{
opacity:0;
}
to{
opacity:1;
}`;

const slide2 = keyframes`

from{
opacity:0;
}
to{
opacity:1;

}`;

export { ani, slide, slide2 };
