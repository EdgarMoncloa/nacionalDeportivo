// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';

export default function Search() {
  return (
    <StyledContainer htmlFor='input'>
      <CiSearch className='icon' />
      <StyledInput id='input' placeholder='Search' />
    </StyledContainer>
  );
}

const StyledContainer = styled.label`
  display: flex;
  height: 40px;
  padding: 8px 16px 8px var(--font-size-body3, 12px);
  align-items: center;
  gap: var(--font-size-body3, 12px);
  align-self: stretch;

  border-radius: 8px;
  border: 1px solid var(--colors-app-neutral-neutral-50, #fcfcfc);
  background: var(--Neutral-transparent-100, rgba(241, 240, 241, 0.5));

  /* Background blur */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);

  & .icon {
    width: auto;
    height: 80%;
    color: var(--colors-app-neutral-neutral-50, #fcfcfc);
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  text-decoration: none;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 2em;
  /* color: black; */
  color: var(--colors-app-neutral-neutral-50, #fcfcfc);

  &::placeholder {
    color: var(--colors-app-neutral-neutral-50, #fcfcfc);
  }
`;

Search.propTypes = {};

Search.defaultProps = {};
