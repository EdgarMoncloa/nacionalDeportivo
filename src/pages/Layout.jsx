import styled from 'styled-components';
import MainBar from '../stories/molecules/mainBar/MainBar';
import background from './../imgs/background.png';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';

export function Layout({ type = 'base' }) {
  return (
    <>
      <StyledContainer>
        {type === 'blog' ? (
          <>
            <MainBar headerPosition={'absolute'} />
          </>
        ) : (
          <>
            <MainBar />
            <StyledBackground src={background} />
          </>
        )}
        <Outlet />
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  color: black;
  background-color: white;
`;

const StyledBackground = styled.img`
  /* height: 100%; */
  /* width: 100%; */
  position: absolute;
  z-index: -10;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-size: cover;

  display: block;
  /* max-width: 1280; */
  /* max-height: 720; */
  width: auto;
  /* height: auto; */
`;

Layout.propTypes = {
  type: PropTypes.oneOf('base', 'blog'),
};
