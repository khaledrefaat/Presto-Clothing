import styled, { css } from 'styled-components';

const CustomButtonContainer = styled.button`
  font-size: 1rem;
  padding: 0.8rem;
  text-transform: uppercase;
  transition: all 0.3s ease-out;
  border: 1px solid transparent;
  transform: translateY(0);
  background-color: #007bff;
  color: #fff;

  @media only screen and (min-width: 25em) {
    font-size: 1.4rem;
    padding: 1rem 2rem;
  }

  @media only screen and (min-width: 62em) {
    font-size: 1.6rem;
    padding: 1rem 2rem;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: translateY(2px);
  }
  ${getButtonStyles}
`;

const blackInvertedStyles = css`
  background-color: #000;
  color: #fff;

  &:hover {
    background-color: transparent;
    color: #000;
    border: 1px solid #000;
  }
`;

const checkOutStyles = css`
  background-color: rgba(255, 255, 255, 0.6);
  color: #000;
  padding: 1rem 2rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
  }
`;

function getButtonStyles({ blackInverted, checkOut }) {
  if (blackInverted) return blackInvertedStyles;
  if (checkOut) return checkOutStyles;
  return;
}

export default CustomButtonContainer;
