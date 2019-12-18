import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  FaSpinner,
  FaThermometerEmpty,
  FaPercent,
  FaBeer,
  FaBalanceScale,
  FaReply,
} from 'react-icons/fa';
import propTypes from 'prop-types';

import api from '../../services/api';

import { Loading, ProductDetails, Container } from './styles';

export default class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    await api
      .get(`/beers/${Number(id)}`)
      .then(result => {
        const product = result.data[0];
        this.setState({ beer: product, loading: false });
      })
      .catch(err => {
        console.log('ERRO: ', err);
      });
  }

  render() {
    const { beer, loading } = this.state;

    if (loading) {
      return (
        <Loading>
          <FaSpinner color="#FFF" size={32} />
        </Loading>
      );
    }

    return (
      <Container>
        <Link to="/">
          <FaReply size={32} color="#ff512f" />
        </Link>

        <ProductDetails>
          <img src={beer.image_url} alt={beer.name} />
          <div>
            <h1>{beer.name}</h1>
            <strong>{beer.tagline}</strong>
            <tr>
              <td>
                <FaBalanceScale size={26} color="#f09819" />
                <span>Volume</span>
              </td>
              <td>
                <FaPercent size={18} color="#f09819" />
                <span>Alcohol</span>
              </td>
              <td>
                <FaThermometerEmpty size={24} color="#f09819" />
                <span>Temperature</span>
              </td>
              <td>
                <FaBeer size={22} color="#f09819" />
                <span>Style</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>{beer.volume.value}</span>
                <span>{beer.volume.unit}</span>
              </td>
              <td>
                <span>{beer.abv}</span>
              </td>
              <td>
                <span>{beer.ph}</span>
              </td>
              <td>
                <span>{beer.brewers_tips}</span>
              </td>
            </tr>
            <p>
              <span>Brewers tips: </span> {beer.brewers_tips}
            </p>
          </div>
        </ProductDetails>
        <p>
          <span>Description: </span>
          {beer.description}
        </p>
        <p>
          <span>Food pairing: </span>
          {beer.food_pairing}
        </p>
      </Container>
    );
  }
}

Beer.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.number,
    }),
  }).isRequired,
};
