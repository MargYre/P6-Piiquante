import Home from './pages/Home'
import About from './pages/About'
import Root from './pages/Root'
import ErrorPage from './pages/ErrorPage'
import Logement from './pages/Logement'

import {
    createBrowserRouter,
  } from "react-router-dom";

const router = createBrowserRouter([
  
    {
      path: "/",
      element: <Root />,
      //errorElement: <ErrorPage />,
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
      },
      {
        path: "*",
        element: <ErrorPage />,
      }]
    }
]);

export default router;