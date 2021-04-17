import React from 'react';
import { selectCollection } from '../../redux/shopSelector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function Collection({ collection }) {
  console.log(collection);
  return (
    <div className="collection">
      <h2>Category Hats</h2>
    </div>
  );
}

const mapStateToProps = (state, ownProps) =>
  createStructuredSelector({
    collection: selectCollection(ownProps.match.params.categoryId),
  });

export default connect(mapStateToProps)(Collection);
