import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin: 50px 0;
`;

export const HomeBeer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
  text-align: right;
  margin-right: 10px;
  h1 {
    padding-left: 5px;
    display: block;
    color: #fff;
  }
`;
