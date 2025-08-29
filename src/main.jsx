import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { createRoot } from 'react-dom/client'


//Pages
import Home from "../src/pages/home.jsx"

import Register from './pages/register.jsx';


//Tailwindcss import
import './index.css'


const router = createBrowserRouter([
  {path: '/Início', element: < Register/>}
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)