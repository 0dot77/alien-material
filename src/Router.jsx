import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HackedOffice from './pages/HackedOffice';
import HeadOffice from './pages/HeadOffice';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HeadOffice />}
        />
        <Route
          path="/changed"
          element={<HackedOffice />}
        />
        <Route
          path="/new"
          element={null}
        />
        <Route
          path="/research"
          element={null}
        />
      </Routes>
    </BrowserRouter>
  );
}
