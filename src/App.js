import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Todo from './Components/Todo'
import {Select,Delete} from './Components/Operation';
const App = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Todo/>}/>
        <Route path="/select" element={<Select/>}/>
        <Route path="/delete" element={<Delete/>}/>
    </Routes>
    </>
  );
}

export default App;
