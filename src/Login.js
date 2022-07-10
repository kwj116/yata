import { useState } from "react";
import styles from "./styles.module.css";
import Home from "./Home";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  height: ${(props) => props.height};
  width: 50%;
  margin-top: 5%;
  align-items: start;
  justify-content: space-around;
`;

const Header = styled.div`
  width: 100%;
  background-color: #6edcdc;
  height: 10vh;
`;

function Login() {
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
    <div className={styles.div}>
      <Header></Header>
      <Div height="10vh"></Div>
      <h1>로그인</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          title="아이디를 입력하세요."
          className={styles.input}
          onChange={onChange}
          type="text"
          placeholder="아이디 입력"
        ></input>
        <input
          title="비밀번호를 입력하세요."
          className={styles.input}
          onChange={onChange}
          type="text"
          placeholder="비밀번호 입력"
        ></input>
        <button className={styles.button}>로그인</button>
      </form>
    </div>
  );
}

export default Login;
