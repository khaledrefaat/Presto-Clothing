import React from 'react';
import CollectionPreview from './CollectionPreview';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollection } from '../../redux/shopSelector';

function CollectionOverview({ collection }) {
  return (
    <div>
      {collection.map(item => (
        <CollectionPreview key={item.id} len="4" item={item} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collection: selectShopCollection,
});

export default connect(mapStateToProps)(CollectionOverview);
