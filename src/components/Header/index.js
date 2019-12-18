import React from 'react';

import { FaBeer } from 'react-icons/fa';

import { Container, HomeBeer } from './styles';

export default function Header() {
  return (
    <Container>
      <HomeBeer to="/">
        <FaBeer color="#FFF" size={36} />
        <h1> Beer Catalog</h1>
      </HomeBeer>
    </Container>
  );
}
