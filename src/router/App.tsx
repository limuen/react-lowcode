import type { RouteObject } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import Dashboard from '@/views/dashboard';

const Routes: RouteObject[] = [
  {
    path: '/',
    element: <Dashboard />,
  },
];

const App = () => {
  return <>{useRoutes(Routes)}</>;
};

export default App;
