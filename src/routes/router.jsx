import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import { Root } from '../pages/Root';
import HotelsPage from '../pages/HotelsPage';
import { Layout } from '../pages/Layout';
import HotelPage from '../pages/HotelPage';
import RestaurantsPage from '../pages/RestaurantsPage';
import RestaurantPage from '../pages/RestaurantPage';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Root />,
      },
      {
        path: '/Hoteles',
        element: <HotelsPage />,
      },
      {
        path: '/Restaurantes',
        element: <RestaurantsPage />,
      },
    ],
  },
  {
    element: <Layout type={'blog'} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/Hotel/:id',
        element: <HotelPage />,
      },
      {
        path: '/Restaurant/:id',
        element: <RestaurantPage />,
      },
    ],
  },
]);
