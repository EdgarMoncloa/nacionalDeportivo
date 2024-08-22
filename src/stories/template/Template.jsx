// import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Template() {
  return <StyledContainer></StyledContainer>;
}

const StyledContainer = styled.div`
  display: grid;
  width: 328px;
  height: 136px;
  align-items: flex-start;
  gap: 16px;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr;
  overflow: hidden;
  align-content: center;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: var(--size-border-very-small, 1px) solid
    var(--colors-app-neutral-100, #f1f0f1);
  background: var(--Neutral-transparent-100, rgba(241, 240, 241, 0.5));

  /* Background blur */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
`;

Template.propTypes = {};

Template.defaultProps = {};
