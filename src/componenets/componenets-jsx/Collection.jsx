import React from 'react';
import { selectCollection } from '../../redux/shopSelector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from './CollectionPreview';

function Collection({ collection }) {
  console.log(collection);
  return (
    <div className="collection">
      <CollectionPreview item={collection} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) =>
  createStructuredSelector({
    collection: selectCollection(ownProps.match.params.categoryId),
  });

export default connect(mapStateToProps)(Collection);
