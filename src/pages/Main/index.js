import React, { Component } from 'react';
import { FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { ProductList, Loading, PageActions } from './styles';

const perPage = 6;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      beers: [],
      page: 1,
    };
  }

  async componentDidMount() {
    this.loadBeers();
  }

  loadBeers = async () => {
    const { page } = this.state;

    this.setState({ loading: true });

    const response = await api.get(`/beers?&page=${page}&per_page=${perPage}`);

    this.setState({
      beers: response.data,
      loading: false,
    });
  };

  handlePage = async action => {
    const { page } = this.state;
    await this.setState({
      page: action === 'next' ? page + 1 : page - 1,
    });
    this.loadBeers();
  };

  render() {
    const { loading, beers, page } = this.state;

    if (loading) {
      return (
        <Loading>
          <FaSpinner color="#FFF" size={32} />
        </Loading>
      );
    }
    return (
      <>
        <ProductList>
          {beers.map(beer => (
            <li key={beer.id}>
              <img src={beer.image_url} alt={beer.name} />
              <strong>{beer.name}</strong>
              <span>{beer.tagline}</span>
              <Link to={`/beers/${beer.id}`}>
                <button type="button">
                  <div>
                    <FaPlus size={16} color="#FFF" />
                  </div>
                  <span>Details</span>
                </button>
              </Link>
            </li>
          ))}
        </ProductList>
        <PageActions>
          <button
            type="button"
            disabled={page < 2}
            onClick={() => this.handlePage('back')}
          >
            Back
          </button>
          <span>Página {page}</span>
          <button type="button" onClick={() => this.handlePage('next')}>
            Next
          </button>
        </PageActions>
      </>
    );
  }
}
