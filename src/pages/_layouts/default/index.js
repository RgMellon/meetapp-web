import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

import Header from '../../../components/Header';
// import { Container } from './styles';

export default function defaultLayout({ children }) {
  return (
    <>
      <Wrapper>
        <Header />
        {children}
      </Wrapper>
    </>
  );
}

defaultLayout.prototypes = {
  children: PropTypes.element.isRequired,
};
