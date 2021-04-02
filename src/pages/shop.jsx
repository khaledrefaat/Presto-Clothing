import React, { Component } from 'react';
import shopData from './shopData';
import CollectionPreview from '../componenets/componenets-jsx/CollectionPreview';
import { Container } from 'react-bootstrap';

export class Shop extends Component {
  state = {
    collections: shopData,
  };

  render() {
    return (
      <Container fluid style={{ marginTop: '2rem' }}>
        {this.state.collections.map(item => (
          <CollectionPreview key={item.id} len="4" item={item} />
        ))}
      </Container>
    );
  }
}

export default Shop;
