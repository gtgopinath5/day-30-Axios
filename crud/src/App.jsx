import React from 'react';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <header className='header'>
          <h1>CRUD OPERATIONS</h1>
          <nav className='nav'>
            <Link className='nav-link' to="/create">Create</Link>
            <Link className='nav-link' to="/read">Read</Link>
          </nav>
        </header>
        <main className='main-content'>
          <h1>CRUD</h1>
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
