import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./Home";
import  Listemployee  from './Listemployee';
import Contactus from "./Contactus"
import Example from "./Example";
import Nopage from "./Nopage";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />}>
    <Route path="/" element={<Home />}/>
    <Route path="Home" element={<Home />} />
    <Route path="Contactus" element={<Contactus />} />
    <Route path="Listemployee" element={<Listemployee />} />
    <Route path="Example" element={<Example />} />
    <Route path="*" element={<Nopage />} />
   </Route>
  </Routes>
</BrowserRouter>

   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
