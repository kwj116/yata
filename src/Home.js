import styled, { keyframes } from "styled-components";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Login from "./Login";

const ani = keyframes`
0%{
 opacity:0
}
50%{
opacity:0.5 ;
}
100%{
  opacity:1;
}`;

const Header = styled.div`
  width: 100%;
  background-color: #6edcdc;
  height: 10vh;
`;

const Father = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  width: 300px;
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
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  width: 300px;
  height: 50px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 800;
  :hover {
    transition: 0.1s;
    transform: scale(1.2, 1.2);
  }
`;

const StyledLink = styled(Link)``;

function Home() {
  return (
    <Father>
      <Header></Header>
      <Div height="5vh"></Div>
      <Logo></Logo>
      <Div>
        <StyledLink to="/login">
          <Btn title="로그인 페이지로 이동합니다." bgColor="white">
            로그인
          </Btn>
        </StyledLink>
        <StyledLink to="/signup">
          <Btn
            title="회원가입 페이지로 이동합니다."
            bgColor="black"
            color="white"
          >
            회원가입
          </Btn>
        </StyledLink>
      </Div>
    </Father>
  );
}

export default Home;
