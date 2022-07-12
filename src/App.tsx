import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Main from "./pages/Main";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Basket from "./pages/Basket";
import Product from "./pages/Product";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='*' element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
