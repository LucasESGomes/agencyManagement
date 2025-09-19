import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import React from 'react';


//Pages
import Home from "./pages/home.jsx"

import Register from './pages/register.jsx';

import Login from './pages/login.jsx';

import FormBudget from './pages/formBudget.jsx';

import BudgetEdit from './pages/budgetEdit.jsx';


//Tailwindcss import
import './index.css'


const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/Cadastro', element: <Register />},
  {path: '/Entrar', element: <Login />},
  {path: '/formularioOrcamento', element: <FormBudget />},
  {path: '/editarOrcamento', element: < BudgetEdit/>}
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)