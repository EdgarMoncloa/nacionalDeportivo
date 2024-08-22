import PropTypes from 'prop-types';
import { FaHotel } from 'react-icons/fa';
import styled from 'styled-components';

/**
 * Primary UI component for user interaction
 */
export default function PrimaryLink({ icon, text }) {
  return (
    <StyledContainer>
      <StyledIconContainer>{icon}</StyledIconContainer>
      <Title>{text}</Title>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  width: 156px;
  height: 156px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
  line-height: 1.5em;
  gap: 0.5em;

  border-radius: 8px;
  border: var(--size-border-small, 2px) solid
    var(--colors-app-main-700, #c11627);
  background: var(--Neutral-transparent-100, rgba(241, 240, 241, 0.5));

  /* Background blur */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
`;

const StyledIconContainer = styled.div`
  width: 75%;
  height: 75%;

  & * {
    width: 100%;
    height: 100%;
    color: var(--colors-app-main-700, #c11627);
  }
`;

const Title = styled.div`
  font-size: 2em;
  color: var(--colors-app-main-700, #c11627);
`;

PrimaryLink.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
};

PrimaryLink.defaultProps = {
  icon: <FaHotel />,
  text: 'Hoteles',
};
