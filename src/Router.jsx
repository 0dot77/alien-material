import styled from 'styled-components';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useMobile from './hooks/useMobile';

const HackedOffice = lazy(() => import('./pages/HackedOffice'));

const HeadOffice = lazy(() => import('./pages/HeadOffice'));

const AMnews = lazy(() => import('./pages/desktop/AM/AMnews'));

const RProgram = lazy(() => import('./pages/desktop/RP/RProgram'));

const RProgramMobile = lazy(() => import('./pages/mobile/RP/RProgramMobile'));

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
  const { isMobile } = useMobile();
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
            path="/changed"
            element={<HackedOffice />}
          />
          <Route
            path="/news"
            element={<AMnews />}
          />
          <Route
            path="/research"
            element={isMobile ? <RProgramMobile /> : <RProgram />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
