import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartDropdownContainer = styled.div`
  width: 25rem;
  height: 35rem;
  border: 1px solid #333;
  position: absolute;
  bottom: -35rem;
  right: 0;
  background-color: #fff;
  padding: 1rem;
  transition: all 0.3s ease-out;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 28rem;
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  margin-bottom: 1rem;
`;

export const SpanTextContainer = styled.span`
  text-align: center;
  font-size: 1.6rem;
  margin-top: 2rem;
  text-transform: capitalize;
`;

export const ButtonContainer = styled(Link)`
  text-align: center;
  display: block;
  margin-top: 0.5rem;
  width: 100%;
`;

export const ImgContainer = styled.img`
  width: 40%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 2rem;
  font-size: 1.2rem;
`;
