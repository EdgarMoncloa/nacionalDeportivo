import styled from 'styled-components';
import MainBar from '../stories/molecules/mainBar/MainBar';
import background from './../imgs/background.png';
import { Outlet } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <StyledContainer>
        <MainBar />
        <StyledBackground src={background} />
        <Outlet />
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-position-x: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  color: black;
`;

const StyledBackground = styled.img`
  position: absolute;
  z-index: -10;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-size: cover;

  display: block;
  width: auto;
`;
