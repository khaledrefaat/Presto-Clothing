import React from 'react';
import CollectionOverview from '../componenets/componenets-jsx/CollectionOverview';
import Collection from '../componenets/componenets-jsx/Collection';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';

const Shop = ({ match }) => {
  return (
    <Container fluid>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={Collection} />
    </Container>
  );
};

export default Shop;
