import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Password from './Components/Form/Password';
import Registration from './Components/Registration/Registration';

import {
  createBrowserRouter,
  Form,
  RouterProvider,
} from "react-router-dom";




const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Password",
    element: <Password />,
  },
  {
    path: "/Registration",
    element: <Registration />,
  },
  {
    path: "/Form",
    element: <Form />,
  },

]);

root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
