import { TOGGLE_CARD_HIDDEN, ADD_ITEM, DELETE_ITEM } from './types';

export const toggleCartHidden = () => ({
  type: TOGGLE_CARD_HIDDEN,
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const deleteItem = item => ({
  type: DELETE_ITEM,
  payload: item,
});
