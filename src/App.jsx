import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main';
import DetailPage from './pages/Detail';
import { Provider } from 'react-redux';
import store from './redux/configStore';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/detail/:id' element={<DetailPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
