// LoginForm.js
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  max-width: 100%;

  p {
    font-size: 12px;
    text-align: center;
  }

  h1 {
    text-align: center;
    font-size: 28px;
    margin: 20px 0px;
  }

  h4 {
    font-size: 24px;
    margin: 10px 0px 0px 0px;
    text-align: center;
    color: gray;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const Error = styled.p`
  color: red;
  font-size: 0.875rem;
`;

const LoginForm = ({ onAuthenticate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("*Please fill in all fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address");
      return;
    }

    onAuthenticate(true);
    navigate("/home");
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h4>Welcome </h4>
        <h1>Login</h1>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Error>{error}</Error>}
        <Button type="submit">Login</Button>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
        <p>
          Forgot Password? <a href="/forgot-password">Reset Password</a>
        </p>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;


