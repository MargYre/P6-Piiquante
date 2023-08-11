import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import './styles/index.scss'
import About from './pages/About'
import Root from './pages/Root'
import ErrorPage from './pages/ErrorPage'
import Logement from './pages/Logement'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/",
      element: <Home/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/logements/:logementId",
      element: <Logement/>,
    }]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
