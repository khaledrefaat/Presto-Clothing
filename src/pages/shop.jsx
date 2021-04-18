import React from 'react';
import Collection from '../componenets/componenets-jsx/Collection';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollection } from '../redux/shopSelector';
import CollectionPreview from '../componenets/componenets-jsx/CollectionPreview';

const Shop = ({ match, collection }) => {
  const renderCollectionOverview = () => (
    <div>
      {collection.map(item => (
        <CollectionPreview key={item.id} len="4" item={item} />
      ))}
    </div>
  );

  return (
    <Container fluid>
      <Route
        exact
        path={`${match.path}`}
        component={renderCollectionOverview}
      />
      <Route path={`${match.path}/:categoryId`} component={Collection} />
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectShopCollection,
});

export default connect(mapStateToProps)(Shop);
