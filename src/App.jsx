import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ComponentsPage from './pages/ComponentsPage';
import AnimationsPage from './pages/AnimationsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/animations" element={<AnimationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
