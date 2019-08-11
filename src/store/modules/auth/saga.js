import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

export function* signUp({ payload }) {
  const { name, email, password } = payload;

  try {
    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    history.push('/');
  } catch (e) {
    toast.error('Erro ao criar usuário');
    // yield put(signFail());
  }

  yield;
}

export default all([takeLatest('@auth/SIGN_UP_REQUEST', signUp)]);
