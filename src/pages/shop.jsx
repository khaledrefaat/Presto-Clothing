import React from 'react';
import Collection from '../componenets/componenets-jsx/Collection';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../redux/shopSelector';
import ShowCollection from '../componenets/componenets-jsx/ShowCollection';

const Shop = ({ match, collection }) => {
  const renderCollectionOverview = () => (
    <>
      {collection.map(item => (
        <ShowCollection key={item.id} len="4" item={item} />
      ))}
    </>
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
  collection: selectCollectionForPreview,
});

export default connect(mapStateToProps)(Shop);
