import { all, call, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSucces } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);

    yield put(updateProfileSucces(response.data));

    toast.success('Perfil atualizado com sucesso');

    // toast.succes('Perfil atualizado com sucesso');
  } catch (error) {
    toast.error('Erro ao atualizar perfil');
  }
}

export default all([takeLatest('@user/UPDATE_USER_REQUEST', updateProfile)]);
