/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import City from './pages/City';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="city/:cityName" element={<City />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
