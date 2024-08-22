// import PropTypes from 'prop-types';
import styled from 'styled-components';
import ITCJ_LOGO from '/public/ITCJ_LOGO.png';
import NACIONAL_LOGO from '/public/NACIONAL_LOGO.png';
import TECNM_LOGO from '/public/TECNM_LOGO.png';

/**
 * Primary UI component for user interaction
 */
export default function LogosBar() {
  return (
    <StyledContainer>
      <img src={TECNM_LOGO} alt='TECNM_LOGO' className='TECNM_LOGO' />
      <img src={ITCJ_LOGO} alt='ITCJ_LOGO' className='ITCJ_LOGO' />
      <img src={NACIONAL_LOGO} alt='NACIONAL_LOGO' className='NACIONAL_LOGO' />
      <StyledDivider />
      <StyledDivider />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: 82px;

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 5fr 1fr;
  grid-template-areas:
    'TECNM_LOGO   ITCJ_LOGO   NACIONAL_LOGO'
    'Linea1       ITCJ_LOGO   Linea2';
  justify-items: center;
  align-items: center;
  justify-content: center;

  & .TECNM_LOGO {
    grid-area: TECNM_LOGO;
  }
  & .ITCJ_LOGO {
    grid-area: ITCJ_LOGO;
    transform: translateY(15%);
  }
  & .NACIONAL_LOGO {
    grid-area: NACIONAL_LOGO;
  }
`;

const StyledDivider = styled.div`
  width: 80%;
  height: 2px;
  background: var(--colors-itcj-main, #c11627);
`;

LogosBar.propTypes = {};

LogosBar.defaultProps = {};
