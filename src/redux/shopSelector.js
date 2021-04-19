import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const selectShopCollection = createSelector(
  [selectShop],
  shop => shop.collection
);

export const selectCollectionForPreview = createSelector(
  [selectShopCollection],
  collection => Object.entries(collection).map(curr => curr['1'])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollection],
    collection => collection[collectionUrlParam]
  );
