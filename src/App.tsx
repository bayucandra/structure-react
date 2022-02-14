import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { MainLayout } from './containers/MainLayout';
import { PageHome } from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<PageHome/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
