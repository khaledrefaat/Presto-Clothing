import {
  TOGGLE_CARD_HIDDEN,
  ADD_ITEM,
  DELETE_ITEM,
  REMOVE_ITEM_FROM_CART,
} from './types';

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

export const removeItemFromCart = item => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: item,
});
