// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TopBar } from '../../atoms/topBar/TopBar';
import { LogosBar } from '../../atoms/logosBar/LogosBar';

export default function MainBar() {
  return (
    <StyledContainer>
      <TopBar />
      <LogosBar />
    </StyledContainer>
  );
}

const StyledContainer = styled.div``;

MainBar.propTypes = {};

MainBar.defaultProps = {};
