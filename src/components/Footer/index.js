import React from 'react';

import { FaGithub } from 'react-icons/fa';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <p>Developed by</p>
      <a href="https://github.com/anacvignola">anacvignola </a>
      <FaGithub color="#FFF" size={18} />
    </Container>
  );
}
