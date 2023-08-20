import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './page/Home';
import Menu from './page/Menu';
import About from './page/About';
import Contact from './page/Contact';
import Login from './page/Login';
import Newproduct from './page/Newproduct';
import Signup from './page/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path="menu" index element={<Menu/>}/>
      <Route path="about" index element={<About/>}/>
      <Route path="contact" index element={<Contact/>}/>
      <Route path="login" index element={<Login/>}/>
      <Route path="newproduct" index element={<Newproduct/>}/>
      <Route path="signup" index element={<Signup/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>*/

  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
