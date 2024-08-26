import styled from 'styled-components';
import PrimaryLink from '../stories/atoms/primaryLink/PrimaryLink';
import { FaHotel } from 'react-icons/fa';
import BasicContainer from '../stories/templates/BasicContainer/BasicContainer';

export function Root() {
  return (
    <StyledMenuContainer>
      <PrimaryLink href={'/Hoteles'} icon={<FaHotel />} text='Hoteles' />
      <PrimaryLink />
      <PrimaryLink />
      <PrimaryLink />
      <PrimaryLink />
      <PrimaryLink />
      <PrimaryLink />
      <PrimaryLink />
      <PrimaryLink />
    </StyledMenuContainer>
  );
}

const StyledMenuContainer = styled(BasicContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-content: stretch;
  justify-content: center;
  align-items: start;
`;
