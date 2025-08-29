import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import React from 'react';


//Pages
import Home from "./pages/home.jsx"

import Register from './pages/register.jsx';

import Login from './pages/login.jsx';


//Tailwindcss import
import './index.css'


const router = createBrowserRouter([
  {path: '/', element: <Register />},
  {path: '/entrar', element: <Login />},
  {path: '/Início', element: <Home />}
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)