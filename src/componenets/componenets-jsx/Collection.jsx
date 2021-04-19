import React from 'react';
import { selectCollection } from '../../redux/shopSelector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ShowCollection from './ShowCollection';

function Collection({ collection }) {
  return (
    <div className="collection">
      <ShowCollection item={collection} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) =>
  createStructuredSelector({
    collection: selectCollection(ownProps.match.params.categoryId),
  });

export default connect(mapStateToProps)(Collection);
