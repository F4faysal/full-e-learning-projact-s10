import { FaBeer } from 'react-icons/fa';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div>
    <RouterProvider router={routes}>  </RouterProvider>
    </div>
  );
}

export default App;
