import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container, Separetor } from './styles';

export default function Profile() {
  const user = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleSubmit(data) {
    console.tron.log(data);

    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={user} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Seu email" />
        <Separetor />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Uma nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <button type="submit"> Atualizar perfil </button>
      </Form>
    </Container>
  );
}
