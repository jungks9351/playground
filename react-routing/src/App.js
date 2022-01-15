import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/regist' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/detail' element={<DetailPage />} />
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
