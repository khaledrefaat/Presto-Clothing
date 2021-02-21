import React, { Component } from 'react';
import shopData from './shopData';
import CollectionPreview from '../componenets/CollectionPreview';
import { Container } from 'react-bootstrap';

import './Shop.scss';

export class Shop extends Component {
  state = {
    collections: shopData,
  };

  render() {
    console.log(this.state.collections);
    return (
      <Container fluid className="shop-container">
        <h1>Collections</h1>
        {this.state.collections.map(({ id, ...others }) => (
          <CollectionPreview key={id} len="4" {...others} />
        ))}
      </Container>
    );
  }
}

export default Shop;
