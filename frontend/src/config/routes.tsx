import App from '../App';
import Appp from '../Appp';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MedicalRecordPage from '../pages/MedicalRecordPage';
import NotFoundPage from '../pages/NotFoundPage';
import ProfilePage from '../pages/ProfilePage';
import RegisterPage from '../pages/RegisterPage';
import SchedulePage from '../pages/SchedulePage';
import Shiftspage from '../pages/Shiftspage';

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
          { path: '/home', element: <HomePage /> },
          { path: '/shifts', element: <Shiftspage /> },
          { path: '/patients', element: <MedicalRecordPage /> },
          { path: '/schedule', element: <SchedulePage /> },
          { path: '/profile', element: <ProfilePage /> },
        ],
      },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
];

export default routes;
