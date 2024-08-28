import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Primary UI component for user interaction
 */
export default function BasicButton({ text, action }) {
  return (
    <StyledButton
      onClick={(event) => {
        action(event);
      }}
    >
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  width: 100%;
  padding: var(--font-size-body2, 14px) 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 8px;
  background: var(--colors-itcj-main, #c11627);

  /* Button Shadow */
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
`;

BasicButton.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
};

BasicButton.defaultProps = {
  text: 'TBD',
  action: () => {
    console.log('Action');
  },
};
