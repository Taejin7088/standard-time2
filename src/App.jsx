import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main';
import DetailPage from './pages/Detail';
import { TodosProvider } from './context/todosContext';

const App = () => {
  return (
    <TodosProvider>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/detail/:id' element={<DetailPage />} />
        </Routes>
      </Router>
    </TodosProvider>
  );
};

export default App;
