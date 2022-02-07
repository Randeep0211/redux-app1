import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import UserList from './pages/user-list';
import UserDetail from './pages/user-detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
