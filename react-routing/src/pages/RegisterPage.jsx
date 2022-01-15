import React from 'react';
import { useNavigate } from 'react-router';

const RegisterPage = () => {
  const navigate = useNavigate();
  const backPage = () => {
    navigate('/');
  };
  return (
    <>
      <h1>detail</h1>
      <button onClick={backPage}>뒤로가기</button>
    </>
  );
};

export default RegisterPage;
