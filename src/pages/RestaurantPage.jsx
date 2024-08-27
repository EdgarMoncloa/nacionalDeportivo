import { useParams } from 'react-router-dom';
import restaurants from '../data/restaurants';
import styled from 'styled-components';
import { TextBody1, TextH2, TextH4, TextH5 } from '../stories/tokens/Text';
import BasicContainer from '../stories/templates/BasicContainer/BasicContainer';

export default function RestaurantPage() {
  const { id } = useParams();
  const restaurant = restaurants.find((item) => `${item.id}` === id);

  if (!restaurant) {
    return (
      <StyledNotFound>
        <TextH2>Restaurant no encontrado.</TextH2>
      </StyledNotFound>
    );
  }

  return (
    <>
      <StyledContainer>
        <StyledMainImg src={restaurant.mainImg} />
        <StyledBlogContainer>
          <TextH4>{restaurant.name}</TextH4>
          <hr />
          {restaurant.rates.map((rate, idx) => (
            <TextBody1 key={idx}>
              {rate.cost} - {rate.title}
            </TextBody1>
          ))}
          <br />
          <TextH5>Servicios</TextH5>
          {restaurant.services.map((service, idx) => (
            <TextBody1 key={idx}>{service}</TextBody1>
          ))}
        </StyledBlogContainer>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled(BasicContainer)`
  width: 100%;
  max-height: 100%;
  margin: 0;
  padding: 0;
`;

const StyledNotFound = styled.div`
  width: 80%;
  padding: 5% 0;
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 50% auto;
  text-align: center;

  border-radius: 8px;
  border: var(--size-border-very-small, 1px) solid
    var(--colors-app-neutral-100, #f1f0f1);
  background: var(--Neutral-transparent-100, rgba(241, 240, 241, 0.5));

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(16px);
`;

const StyledMainImg = styled.img`
  width: 100%;
  min-height: 15vh;
  max-height: 50vh;
  object-fit: cover;
`;

const StyledBlogContainer = styled.div`
  width: 90%;
  margin: auto;
`;
