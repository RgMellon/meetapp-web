import React from 'react';
import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { MdDateRange, MdMyLocation } from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';

import {
  Container,
  Header,
  Buttons,
  Main,
  Info,
  ImageContainer,
} from './styles';

export default function MeetappDetail() {
  const { meetup } = useSelector(state => state.meetup);

  async function handleCancel() {
    await api.delete(`meetapp/${meetup.id}`);
    toast.success('Meetup cancelada');
    history.push('/');
  }

  function handleRedirect() {
    history.push('/meetap/edit');
  }

  return (
    <Container>
      <Header>
        <h1> {meetup.title} </h1>
        <Buttons>
          <button type="button" onClick={handleRedirect}>
            Editar
          </button>
          <button onClick={handleCancel} id="cancel" type="button">
            Cancelar
          </button>
        </Buttons>
      </Header>
      <Main>
        <ImageContainer>
          <img src={meetup.image.url} alt={meetup.image.name} />
        </ImageContainer>
        <p>{meetup.desc}</p>

        <span>
          Caso queira participar como palestrante do meetup envie um email para
          orga@mail.com
        </span>

        <Info>
          <time>
            <MdDateRange color="#fff" size="16" />
            {meetup.dateFormated}
          </time>
          <span>
            <MdMyLocation color="#fff" size="16" />
            Rua Carlo Alberto, 333
          </span>
        </Info>
      </Main>
    </Container>
  );
}
