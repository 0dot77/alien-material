import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const HackedOffice = lazy(() => import('./pages/HackedOffice'));

const HeadOffice = lazy(() => import('./pages/HeadOffice'));

const AMnews = lazy(() => import('./pages/desktop/AM/AMnews'));

const RProgram = lazy(() => import('./pages/desktop/RP/RProgram'));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>준비중...</h1>}>
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
            element={<RProgram />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
