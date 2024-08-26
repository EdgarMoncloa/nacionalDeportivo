// import PropTypes from 'prop-types';
import styled from 'styled-components';
import TopBar from '../../atoms/topBar/TopBar';
import LogosBar from '../../atoms/logosBar/LogosBar';
import PropTypes from 'prop-types';

export default function MainBar({ headerPosition }) {
  return (
    <StyledContainer $headerPosition={headerPosition}>
      <TopBar />
      <LogosBar />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  z-index: 100;
  width: 100%;
  position: ${(p) => p.$headerPosition};
`;

MainBar.propTypes = {
  headerPosition: PropTypes.oneOf('relative', 'absolute'),
};

MainBar.defaultProps = {
  headerPosition: 'relative',
};
