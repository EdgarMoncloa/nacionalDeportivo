import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaHotel } from 'react-icons/fa';
import PrimaryLink from '../../atoms/primaryLink/PrimaryLink';
import { FaUserPlus } from 'react-icons/fa';
import { BiSolidMapAlt } from 'react-icons/bi';
import { FaSearchLocation } from 'react-icons/fa';
import { FaMedal } from 'react-icons/fa';
import { SiWindows } from 'react-icons/si';

export default function MainMenu({ items }) {
  return (
    <StyledContainer>
      {items.map((item, idx) => (
        <PrimaryLink key={idx} icon={item.icon} text={item.text} />
      ))}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

MainMenu.propTypes = {
  items: PropTypes.array,
};

MainMenu.defaultProps = {
  items: [
    {
      icon: <FaHotel />,
      text: 'Hoteles',
    },
    {
      icon: <FaUserPlus />,
      text: 'Registro',
    },
    {
      icon: <BiSolidMapAlt />,
      text: 'Mapa',
    },
    {
      icon: <FaSearchLocation />,
      text: 'Puntos de interés',
    },
    {
      icon: <FaMedal />,
      text: 'Disciplinas',
    },
    {
      icon: <SiWindows />,
      text: 'Otros...',
    },
  ],
};
