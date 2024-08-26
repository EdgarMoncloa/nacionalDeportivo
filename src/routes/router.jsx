import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import { Root } from '../pages/Root';
import HotelsPage from '../pages/HotelsPage';
import { Layout } from '../pages/Layout';
import HotelPage from '../pages/HotelPage';

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
    ],
  },
]);
