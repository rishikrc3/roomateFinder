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
import Card from './pages/AddListing';
import NeedRoommate from './pages/needRoommate';
import NeedRoom from './pages/needRoom';
import Profile from './pages/profile';
import Footer from './pages/Footer' ;
import './index.css';
import RoomPage from './pages/components/Roompage';
import RoommatePage from './pages/components/RoommatePage';
import SuccessPage from './pages/success';
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
        path: "/addListing",
        element: <Card />,
      },
      {
        path: "/needRoom",
        element: <NeedRoom />,
      },
      {
        path: "/needRoommate",
        element: <NeedRoommate />,
      },
      {
        path: "/success",
        element: <SuccessPage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
      {
        path: "/rooms/:id",
        element: <RoomPage/>
      },
      {
        path: "/roommates/:id",
        element: <RoommatePage/>
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
