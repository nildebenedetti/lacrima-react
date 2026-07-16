import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import './App.css'
import AppLayout from "./layouts/AppLayout/AppLayout.jsx";
import Home from './pages/Home.jsx';

function App() {

  return <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  </>
}

export default App;
