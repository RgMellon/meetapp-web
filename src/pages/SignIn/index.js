import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/logo.svg';
import { sigInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Email formato inválido')
    .required('Email obrigatório'),

  password: Yup.string().min(6, 'Senha miníma 6 characteres'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(sigInRequest(email, password));
  }
  return (
    <>
      <img src={logo} alt="" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" placeholder="Seu email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit"> Entrar </button>
        <Link to="/register"> Criar conta grátis </Link>
      </Form>
    </>
  );
}
