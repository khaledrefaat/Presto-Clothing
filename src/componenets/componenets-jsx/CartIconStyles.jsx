import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import styled from 'styled-components';

export const CartIconContainer = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ::selection {
    background-color: transparent;
  }
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
  width: 2.5rem;
  height: 2.5rem;
`;

export const CountContainer = styled.span`
  position: absolute;
  font-size: 1rem;
  color: #000;
  bottom: 1rem;
  font-weight: 700;
`;
