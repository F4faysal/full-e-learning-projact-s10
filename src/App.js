import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/Routes/Routes";
import toast, { Toaster } from 'react-hot-toast';
import ReactTooltip from 'react-tooltip';

function App() {
  return (
    <div>
      <RouterProvider router={routes}> </RouterProvider>
      <Toaster />
      <ReactTooltip/>
    </div>
  );
}

export default App;
