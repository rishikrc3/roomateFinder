import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Basic from './pages/basic';
import Navbar from './pages/Navbar';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './pages/Login';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Navbar/>
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path:"/basic",
    element:<Basic/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
