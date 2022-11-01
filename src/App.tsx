import { Navigate, useRoutes } from 'react-router-dom';
import { Home, Search } from './pages/index';
import './App.css';

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { 
      path: "/search", 
      element: <Search /> 
    },
    { 
      path: "*", 
      element: <Navigate to="/" />,
    },
  ]);

  return routes;
}

export default App;
