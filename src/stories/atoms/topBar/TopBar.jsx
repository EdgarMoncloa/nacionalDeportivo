import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Primary UI component for user interaction
 */
export default function TopBar() {
  return <StyledTopBar>LXVI EVENTO NACIONAL DEPORTIVO 2024</StyledTopBar>;
}

const StyledTopBar = styled.div`
  width: 100%;
  padding: 8px 0px;
  align-items: center;
  background: linear-gradient(180deg, #c11627 0%, #f06979 100%);
  color: white;
  text-align: center;
`;

TopBar.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

TopBar.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
