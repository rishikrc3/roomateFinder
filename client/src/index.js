import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Basic from './pages/basic';
import Navbar from './pages/Navbar';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './pages/Login';
import Body from './pages/Body';
import Home from './pages/Home';
import Register from './pages/Register';
import Rooms from './pages/Rooms';
import Card from './pages/AddListing';
import NeedRoom from './pages/needRoom';
import NeedRoommate from './pages/needRoommate';
import Profile from './pages/profile';
import Footer from './pages/Footer' ;
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/basic",
        element: <Basic />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/rooms",
        element:<Rooms/>

      },
      {
        path: "/addListing",
        element:<Card/>

      },
      {
        path:"/needRoom",
        element:<NeedRoom/>
      },
      {
        path:"/needRoommate",
        element:<NeedRoommate/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/footer",
        element:<Footer/>
      }
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
