import styled from 'styled-components';
import hotels from '../data/hotels';
import BasicContainer from '../stories/templates/BasicContainer/BasicContainer';
import BasicCard from '../stories/atoms/basicCard/BasicCard';
import { useNavigate } from 'react-router-dom';

export default function HotelsPage() {
  const navigate = useNavigate();
  return (
    <StyledHotelsContainer>
      {hotels.map((hotel) => (
        // <div key={hotel.id}>{hotel.id}</div>
        <BasicCard
          key={hotel.id}
          title={hotel.name}
          text={hotel.description}
          onClick={() => {
            navigate(`/nacionalDeportivo/Hotel/${hotel.id}`);
          }}
          img={hotel.mainImg}
        />
      ))}
    </StyledHotelsContainer>
  );
}

const StyledHotelsContainer = styled(BasicContainer)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`;
