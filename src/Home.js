import styled, { keyframes } from "styled-components";
import yata from "./img/yata.png";
import { Link } from "react-router-dom";
import { slide, slide2, ani } from "./Animation";
import "./reset.css";
const Father = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  position: fixed;
  top: 2vh;
  right: 5vw;
`;

const Btn = styled.button`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border: none;
  :hover {
    color: peru;
  }
`;

const Section = styled.section`
  height: auto;
  max-width: 60%;
  line-height: 5vh;
  font-weight: 900;
  align-items: center;
  color: white;
  word-break: normal;
  animation: ${slide} 2s ease-out forwards;
`;

const Btn_more = styled.button`
  font-size: 5vh;

  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  color: gray;
  border: none;
  :hover {
    color: peru;
  }
`;

function Home() {
  return (
    <Father>
      <Span>
        <Link to="/login">
          <Btn title="로그인 페이지로 이동합니다.">LOGIN</Btn>
        </Link>
        <Link to="/signup">
          <Btn title="회원가입 페이지로 이동합니다.">SIGNUP</Btn>
        </Link>
      </Span>

      <Section>
        요트(YACHT)의 어원은 네덜란드어의 야흐트(Jaght) 에서
        유래되었으며,야헨(Jagen)에서 파생되었다. 이는 “사냥하다”, “쫓는다”는
        의미를 가지고 있다. 바람의 방향에 크게 구애됨이 없이 어떤 방향으로도
        자유자재로 달릴 수 있도록 고안된 근대적 요트는 1660년 영국의 국왕 찰스
        2세의 즉위를 축하하기 위해 네덜란드에서 기증한 2척의 수렵선이 요트의
        시초이다.
      </Section>
      <br></br>
      <Link to="/more">
        <Btn_more>More</Btn_more>
      </Link>
    </Father>
  );
}

export default Home;
