import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { MdAddCircle } from 'react-icons/md';

import ReactDatePicker from 'react-datepicker';
import { Form, Input, useField } from '@rocketseat/unform';

import history from '../../services/history';
import api from '../../services/api';

import BannerInput from './BannerInput';

import { Container, WrapperButton } from './styles';

export default function Meetapp() {
  const { id } = useSelector(state => state.user.profile);

  const refDate = useRef('');
  const { fieldName, registerField, defaultValue } = useField('');
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: refDate.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [fieldName, registerField]);

  async function handleSubmit({ title, location, desc, banner_id }) {
    try {
      await api.post('meetapp', {
        date: selected,
        title,
        location,
        desc,
        user_id: id,
        image_id: banner_id,
      });

      toast.success('Meetap adicionado com sucesso');
      history.push('/');
    } catch (err) {
      toast.error('Erro ao adicionar meetup');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="desc" placeholder="Descrição completa" />
        <ReactDatePicker
          placeholderText="Data do meetup"
          name={fieldName}
          selected={selected}
          onChange={date => setSelected(date)}
          ref={refDate}
          timeFormat="HH:mm"
          dateFormat="dd/MM/yyyy"
        />
        <Input name="location" placeholder="Localização" />
        <WrapperButton>
          <button type="submit">
            <MdAddCircle color="#fff" size={20} />
            <span> Adicionar Meetup </span>
          </button>
        </WrapperButton>
      </Form>
    </Container>
  );
}
