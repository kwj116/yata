import { useState } from "react";
import styles from "./styles.module.css";
import Home from "./Home";
import styled from "styled-components";
import bgImg from "./img/bg2.jpg";

const Div = styled.div`
  display: flex;
  height: ${(props) => props.height};
  width: 50%;
  margin-top: 5%;
  align-items: start;
  justify-content: space-around;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const H1 = styled.h1`
  background: linear-gradient(#1e90ff, #00cdff);
  color: transparent;
  -webkit-background-clip: text;
`;
function Signup() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    alert("여기까지");
  };
  return (
    <Container>
      <Div height="10vh"></Div>
      <H1>회원가입</H1>
      <form onSubmit={onSubmit} className={styles.SignupForm}>
        아이디
        <input
          title="원하시는 아이디를 입력하세요."
          className={styles.SignupInput}
          onChange={onChange}
          type="text"
        ></input>
        <br />
        비밀번호
        <input
          title="원하시는 비밀번호를 입력하세요."
          className={styles.SignupInput}
          onChange={onChange}
          type="text"
        ></input>
        <button className={styles.button}>확인</button>
      </form>
    </Container>
  );
}

export default Signup;
