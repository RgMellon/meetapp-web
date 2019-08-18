import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { Container, Content, Profile, LogOut } from './styles';

import { logout } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

export default function Header() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  const { name } = useSelector(state => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </nav>
        <aside>
          <Profile>
            <strong> {name} </strong>
            <Link to="/profile"> Meu Perfil </Link>
          </Profile>
          <LogOut onClick={handleLogout}>
            <p> Sair </p>
          </LogOut>
        </aside>
      </Content>
    </Container>
  );
}
