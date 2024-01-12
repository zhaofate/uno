import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../pages/Layout'

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  );
};

export default Routers;