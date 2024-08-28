import { useParams } from 'react-router-dom';
import hotels from '../data/hotels';
import styled from 'styled-components';
import { TextBody1, TextH2, TextH3, TextH4 } from '../stories/tokens/Text';
import BasicContainer from '../stories/templates/BasicContainer/BasicContainer';
import ServicesList from '../stories/molecules/serviceList/ServiceList';
import ImagesList from '../stories/molecules/imagesList/ImagesList';
import BasicButton from '../stories/atoms/basicButton/BasicButton';

export default function HotelPage() {
  const { id } = useParams();
  const hotel = hotels.find((item) => `${item.id}` === id);

  if (!hotel) {
    return (
      <StyledNotFound>
        <TextH2>Hotel no encontrado.</TextH2>
      </StyledNotFound>
    );
  }

  return (
    <>
      <StyledContainer>
        <StyledMainImg src={hotel.mainImg} />
        <StyledBlogContainer>
          <TextH4>{hotel.name}</TextH4>
          <hr />
          {hotel.rates.map((rate, idx) => (
            <TextBody1 key={idx}>
              {rate.cost} - {rate.title}
            </TextBody1>
          ))}
          <br />
          <TextH3>Servicios</TextH3>
          {hotel.services.map((service, idx) => (
            <ServicesList
              title={service.title}
              items={service.items}
              key={idx}
            />
          ))}
          <ImagesList title={'Imágenes del hotel'} items={hotel.imgs} />
          <br />
          <StyledIFrame
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.195110610923!2d-106.43722488810587!3d31.737874936254666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75b4ce5e039af%3A0x7cc6156426e14551!2sFour%20Points%20by%20Sheraton%20Ciudad%20Juarez!5e0!3m2!1ses-419!2smx!4v1724804407844!5m2!1ses-419!2smx'
            // width='600'
            height='450'
            allowfullscreen=''
            loading='lazy'
            // referrerpolicy='no-referrer-when-downgrade'
          />
          <br />
          <BasicButton
            text='Ir al sitio del hotel.'
            action={() => {
              location.href = hotel.link;
            }}
          />
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

const StyledIFrame = styled.iframe`
  width: 100%;
`;
