import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HackedOffice from './pages/HackedOffice';
import HeadOffice from './pages/HeadOffice';
import AMnews from './components/ForthPages/AMnews';

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
          path="/news"
          element={<AMnews />}
        />
        <Route
          path="/research"
          element={null}
        />
      </Routes>
    </BrowserRouter>
  );
}
