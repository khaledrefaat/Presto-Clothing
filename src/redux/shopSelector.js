import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollection = createSelector([selectShop], shop =>
  Object.entries(shop.collection).map(curr => curr['1'])
);

export const selectCollection = collectionUrlParam =>
  createSelector([selectShop], shop => shop.collection[collectionUrlParam]);
