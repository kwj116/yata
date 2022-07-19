import styled, { createGlobalStyle, keyframes } from "styled-components";
import yata from "./img/yata.png";
import { Link } from "react-router-dom";

const ani = keyframes`
0%{
 opacity:0;
}
50%{
opacity:0.5;
transform: translateY(-5%); 
}
100%{
  opacity:1;
  transform: translateY(0);
}`;

const Father = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img.attrs({
  src: `${yata}`,
})`
  justify-content: center;
  animation: ${ani} 3s linear;
`;

const Div = styled.div`
  display: flex;
  height: ${(props) => props.height};
  width: 50%;
  margin-top: 5%;
  align-items: start;
  justify-content: space-around;
`;

const Btn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  color: white;
  width: 50vh;
  height: 50px;
  border: 0 solid white;
  border-radius: 10px;
  font-size: 30px;
  font-weight: 500;
  :hover {
    transition: 0.1s;
    transform: scale(1.2, 1.2);
  }
`;

function Home() {
  return (
    <Father>
      <Div height="5vh"></Div>
      <Logo></Logo>
      <Div>
        <Link to="/login">
          <Btn title="로그인 페이지로 이동합니다.">LOGIN</Btn>
        </Link>
        <Link to="/signup">
          <Btn title="회원가입 페이지로 이동합니다.">SIGNUP</Btn>
        </Link>
      </Div>
    </Father>
  );
}

export default Home;
