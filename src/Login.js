import styles from "./styles.module.css";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import "./reset.css";
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
  background: linear-gradient(white, gray);
  color: transparent;
  -webkit-background-clip: text;
  margin-bottom: 10vh;
`;
const Con = styled.div`
  margin-bottom: ${(props) => props.marginBottom};
`;
function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onValid = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <Container>
      <Div height="10vh"></Div>
      <H1>로그인</H1>
      <form onSubmit={handleSubmit(onValid)} className={styles.Form}>
        <input
          {...register("id", {
            required: "입력하세요",
            minLength: {
              value: 10,
              message: "이메일 형식으로 입력하시기 바랍니다.",
            },

            pattern: {
              value: /^[A-Za-z0-9._%+-]+@+[A-Za-z]+.+[A-Za-z]$/,
              message: "이메일 형식으로 입력하시기 바랍니다.",
            },
          })}
          className={styles.input}
          type="text"
          placeholder="아이디 입력"
        />
        <Con marginBottom="10px" />
        {errors?.id?.message}
        <input
          {...register("password", {
            required: "입력하세요",
            minLength: { value: 10, message: "너무 짧습니다.(10자 이상)" },
          })}
          className={styles.input}
          type="text"
          placeholder="비밀번호 입력"
        />
        <Con marginBottom="10px" />
        <span>{errors?.password?.message}</span>
        <button className={styles.button}>확인</button>
      </form>
    </Container>
  );
}

export default Login;
