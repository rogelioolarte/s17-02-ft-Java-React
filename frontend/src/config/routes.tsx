import App from '../App';
import Appp from '../Appp';
import { TableWithSearch } from '../components/container/TableWithSearch';
import AboutPage from '../pages/AboutPage';
import DashBoardPage from '../pages/DashBoardPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import Protectedpage from '../pages/Protectedpage';
import RegisterPage from '../pages/RegisterPage';
import SchedulePage from '../pages/SchedulePage';

const routes = [
  {
    path: '/',
    Component: App,
    children: [
      { path: '/', index: true, element: <AboutPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register/:type', element: <RegisterPage /> },
      {
        path: '/',
        element: <Appp />,
        children: [
          { path: '/protected', element: <Protectedpage /> },
          { path: '/home', element: <HomePage /> },
          { path: '/dashboard', element: <DashBoardPage /> },
          { path: '/schedule', element: <SchedulePage /> },
          { path: '/search', element: <TableWithSearch /> },
        ],
      },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
];

export default routes;
