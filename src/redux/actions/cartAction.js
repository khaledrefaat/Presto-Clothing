import { TOGGLE_CARD_HIDDEN, ADD_ITEM } from './types';

export const toggleCartHidden = () => ({
  type: TOGGLE_CARD_HIDDEN,
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});
