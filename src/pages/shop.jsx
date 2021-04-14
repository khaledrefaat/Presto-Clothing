import React from 'react';
import CollectionPreview from '../componenets/componenets-jsx/CollectionPreview';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollection } from '../redux/shopSelector';

const Shop = ({ collection }) => {
  return (
    <Container fluid style={{ marginTop: '2rem' }}>
      {collection.map(item => (
        <CollectionPreview key={item.id} len="4" item={item} />
      ))}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectShopCollection,
});

export default connect(mapStateToProps)(Shop);
