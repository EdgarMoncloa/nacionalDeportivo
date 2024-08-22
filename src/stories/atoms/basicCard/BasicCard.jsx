import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextBody1, TextH4 } from '../../tokens/Text';

export default function BasicCard({ title, text }) {
  return (
    <StyledContainer htmlFor='input'>
      <StyledImgContainer className='img'>
        <StyledImg src='https://picsum.photos/300/200' />
      </StyledImgContainer>
      <StyledDescriptionContainer>
        <TextH4>{title}</TextH4>
        <TextBody1>{text}</TextBody1>
      </StyledDescriptionContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.label`
  display: grid;
  width: 328px;
  height: 136px;
  align-items: flex-start;
  gap: 16px;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr;
  overflow: hidden;
  align-content: center;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: var(--size-border-very-small, 1px) solid
    var(--colors-app-neutral-100, #f1f0f1);
  background: var(--Neutral-transparent-100, rgba(241, 240, 241, 0.5));

  /* Background blur */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
`;

const StyledImgContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledImg = styled.img`
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`;

const StyledDescriptionContainer = styled.div`
  height: 90%;
  width: 90%;
`;

BasicCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

BasicCard.defaultProps = {
  title: 'Titulo',
  text: 'Este es un texto de desripcion que es bastante largo',
};
