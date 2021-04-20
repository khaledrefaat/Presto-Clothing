import styled from 'styled-components';

const FormInputContainer = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  width: 100%;
  outline: none;
  height: 4rem;
  border-bottom: 1px solid #000;
  font-size: 1.6rem;
  padding-bottom: 2rem;
  margin-bottom: 3rem;
  margin-top: 3rem;

  &:first-of-type {
    margin-top: 4rem;
  }

  ::placeholder {
    text-transform: capitalize;
  }
`;

export default FormInputContainer;
