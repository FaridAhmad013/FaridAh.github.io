import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie';
import Error from './Error';

const App = () => {
  return (
      <div className="bg-slate-100 min-h-screen antialiased tracking-tighter font-sans">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='movie/:id' element={<SingleMovie/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </div>
  )
}

export default App