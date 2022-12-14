import styled from 'styled-components';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RPMain from './pages/RPMain';
import Credit from './pages/Credit';

const HeadOffice = lazy(() => import('./pages/HeadOffice'));

const AMnews = lazy(() => import('./pages/desktop/AM/AMnews'));

const LoadingContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    font-size: 1rem;
    font-style: italic;
  }
`;

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <LoadingContainer>
            <h1>기관에 송신 요청 중...</h1>
          </LoadingContainer>
        }
      >
        <Routes>
          <Route
            path="/"
            element={<HeadOffice />}
          />
          <Route
            path="/news"
            element={<AMnews />}
          />
          <Route
            path="/research"
            element={<RPMain />}
          />
          <Route
            path="/credit"
            element={<Credit />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
