import { useState } from "react";
import styles from "./styles.module.css";
import Home from "./Home";
import styled from "styled-components";
import bgImg from "./img/bg2.jpg";
import "./reset.css";
import { useForm } from "react-hook-form";

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
  font-weight: 800;
  font-size: 28px;
  margin-bottom: 10vh;
  background: linear-gradient(white, gray);
  color: transparent;
  -webkit-background-clip: text;
`;

const Con = styled.div`
  margin-bottom: ${(props) => props.marginBottom};
`;

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onValid = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <Container>
      <Div height="10vh"></Div>
      <H1>회원가입</H1>
      <form onSubmit={handleSubmit(onValid)} className={styles.Form}>
        <input
          {...register("id", {
            required: "입력하세요",
            minLength: {
              value: 10,
              message: "너무 짧습니다.(10자 이상)",
            },
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@+[A-Za-z]+.+[A-Za-z]$/,
              message: "이메일 형식으로 입력하시기 바랍니다.",
            },
          })}
          className={styles.input}
          type="text"
          placeholder="원하는 아이디 입력"
        />
        <Con marginBottom="10px" />
        {errors?.id?.message}
        <input
          {...register("password", {
            required: "입력하세요",
            minLength: {
              value: 10,
              message: "너무 짧습니다.(10자 이상)",
            },
          })}
          className={styles.input}
          type="text"
          placeholder="원하는 비밀번호 입력"
        />
        <Con marginBottom="10px" />
        <span>{errors?.password?.message}</span>
        <button className={styles.button}>확인</button>
      </form>
    </Container>
  );
}

export default Signup;
