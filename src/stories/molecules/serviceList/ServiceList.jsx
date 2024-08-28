import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextH5 } from '../../tokens/Text';

export default function ServicesList({ title, items }) {
  return (
    <StyledContainer>
      <TextH5>{title}</TextH5>
      <StyledListContainer>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
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

const StyledListContainer = styled.ul`
  margin-top: 4px;
`;

ServicesList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
};

ServicesList.defaultProps = {
  title: 'Especificaciones de tarifas',
  items: [
    'Tarifas sujetas al 8% de IVA y 4.16% de impuesto estatal sobre hospedaje.',
    'Tarifa incluye hasta 2 desayunos buffet.',
    'Tarifa contemplada para 1 o 2 personas.',
    'Persona extra en $315.00 MXN.',
    'Máximo 3 personas por habitación (solo en habitación de dos camas).',
    'Tarifas cotizadas en pesos MXN',
    'Check Inn a partir de las 3:00 pm, check out a las 12:00 pm.',
  ],
};
