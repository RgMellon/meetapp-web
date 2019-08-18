import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { format, parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';

import { MdAddCircle, MdChevronRight } from 'react-icons/md';
import { Container, Header, Main, Item } from './styles';
import api from '../../services/api';

import { detailMeetup } from '../../store/modules/meetup/actions';

export default function Dashboard() {
  const dispatch = useDispatch();

  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function getMeetups() {
      const response = await api.get('meetapp/users');

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = response.data.map(item => {
        const compareDate = utcToZonedTime(item.date, timezone);

        return {
          ...item,
          dateFormated: format(parseISO(item.date), "d 'de' MMMM", {
            locale: pt,
          }),
          timeDistance: formatDistance(compareDate, new Date(), {
            addSuffix: true,
            locale: pt,
          }),
        };
      });

      setMeetups(data);
    }

    getMeetups();
  }, []);

  function handleDetail(item) {
    dispatch(detailMeetup(item));
  }

  return (
    <Container>
      <Header>
        <h2> Meus meetups</h2>
        <Link to="/meetap">
          <MdAddCircle color="#fff" size={20} />
          <p> Criar meetup </p>
        </Link>
      </Header>

      <Main>
        <Link to="/meetap/details">
          {meetups.map(item => (
            <Item
              key={item.name}
              onClick={() => {
                handleDetail(item);
              }}
            >
              <h4> {item.title} </h4>
              <div>
                <time>
                  {item.dateFormated} | {item.timeDistance}
                </time>
                <MdChevronRight color="#fff" size={20} />
              </div>
            </Item>
          ))}
        </Link>
      </Main>
    </Container>
  );
}
