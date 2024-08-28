import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextH5 } from '../../tokens/Text';

export default function ImagesList({ title, items }) {
  return (
    <StyledContainer>
      <TextH5>{title}</TextH5>
      <StyledListContainer>
        {items.map((item, idx) => (
          <StyledImg key={idx} src={item} />
        ))}
      </StyledListContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  overflow: hidden;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const StyledListContainer = styled.div`
  margin-top: 4px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
`;

const StyledImg = styled.img`
  width: 100%;
`;

ImagesList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
};

ImagesList.defaultProps = {
  title: 'Imagenes',
  items: [
    'https://images.trvl-media.com/lodging/68000000/67400000/67396300/67396297/302d0105.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium',
    'https://images.trvl-media.com/lodging/68000000/67400000/67396300/67396297/302d0105.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463618048.jpg?k=238e37bfd6ef609afaa5d7ea53cc4b24ab227053174c3ae7874bcc33e71949d3&o=&hp=1',
  ],
};
