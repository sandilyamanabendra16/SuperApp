import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Genre from './pages/genre/Genre';
import Dashboard from "./pages/dashboard/Dashboard";
import Homepage from "./pages/homepage/Homepage";
import Promotion from './pages/promotion/PromotionPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router=createBrowserRouter([
  {
    path: "/", element: <App/>
  },
  {
    path:"/genre", element: <Genre/>
  },
  {
    path:"/home", element: <Homepage/>
  },
  {
    path:'/dashboard', element: <Dashboard/>
  },
  {
    path:'/promotion', element: <Promotion/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
