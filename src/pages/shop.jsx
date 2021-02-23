import React, { Component } from 'react';
import shopData from './shopData';
import CollectionPreview from '../componenets/componenets-jsx/CollectionPreview';
import { Container } from 'react-bootstrap';

export class Shop extends Component {
  state = {
    collections: shopData,
  };

  render() {
    console.log(this.state.collections);
    return (
      <Container fluid style={{ marginTop: '2rem' }}>
        {this.state.collections.map(({ id, ...others }) => (
          <CollectionPreview key={id} len="4" {...others} />
        ))}
      </Container>
    );
  }
}

export default Shop;
