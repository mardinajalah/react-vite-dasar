import { Route, Routes } from 'react-router';
import HomePage from '../pages/HomePage';
import UploadPage from '../pages/UploadPage';
import CounterPage from '../pages/CounterPage';

const Router = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route
        path='/upload'
        element={<UploadPage />}
      />
      <Route
        path='/count'
        element={<CounterPage />}
      />
    </Routes>
  );
};

export default Router;
