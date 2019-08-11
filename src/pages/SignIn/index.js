import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';
// import { Container } from './styles';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Email formato inválido')
    .required('Email obrigatório'),

  password: Yup.string().min(6, 'Senha miníma 6 characteres'),
});

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="" />
      <Form schema={schema}>
        <Input name="email" placeholder="Seu email" />
        <Input name="password" placeholder="Sua senha secreta" />
        <button type="submit"> Entrar </button>
        <Link to="/register"> Criar conta grátis </Link>
      </Form>
    </>
  );
}
