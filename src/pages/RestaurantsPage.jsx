import styled from 'styled-components';
import restaurants from '../data/restaurants';
import BasicContainer from '../stories/templates/BasicContainer/BasicContainer';
import BasicCard from '../stories/atoms/basicCard/BasicCard';
import { useNavigate } from 'react-router-dom';

export default function RestaurantsPage() {
  const navigate = useNavigate();
  return (
    <StyledRestaurantsContainer>
      {restaurants.map((restaurant) => (
        <BasicCard
          key={restaurant.id}
          title={restaurant.name}
          text={restaurant.description}
          onClick={() => {
            navigate(`/Restaurant/${restaurant.id}`);
          }}
        />
      ))}
    </StyledRestaurantsContainer>
  );
}

const StyledRestaurantsContainer = styled(BasicContainer)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`;
