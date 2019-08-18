import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import { MdEdit } from 'react-icons/md';

import { Form, Input, useField } from '@rocketseat/unform';

import ReactDatePicker from 'react-datepicker';

import ImageInput from '../../components/ImageInput';

import history from '../../services/history';
import api from '../../services/api';

import { Container, WrapperButton } from '../Meetapp/styles';

export default function Meetapp() {
  const dispatch = useDispatch();

  const refDate = useRef('');

  const { fieldName, registerField, defaultValue } = useField('');

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

  const { meetup } = useSelector(state => state.meetup);

  const [selected, setSelected] = useState(new Date(meetup.date));

  async function handleSubmit(data) {
    const updatedMeetup = {
      ...data,
      date: selected,
    };

    try {
      await api.put(`meetapp/${meetup.id}`, updatedMeetup);
      history.push('/');
      toast.success('Atualizado com sucesso');
    } catch (error) {
      toast.error('OOOPs... ocorreu um erro ao atualizar, tente novmante');
    }
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <ImageInput name="image_id" />
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
            <MdEdit color="#fff" size={20} />
            <span> Editar Meetup </span>
          </button>
        </WrapperButton>
      </Form>
    </Container>
  );
}
