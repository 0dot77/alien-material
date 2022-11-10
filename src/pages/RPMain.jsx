import { Suspense, lazy } from 'react';
import { useMediaQuery } from 'react-responsive';

const RProgram = lazy(() => import('./desktop/RP/RProgram'));
const RProgramMobile = lazy(() => import('./mobile/RP/RProgramMobile'));

const RPMain = () => {
  const checkMobile = useMediaQuery({
    query: '(max-width:767px)',
  });
  return (
    <Suspense fallback={<h1>연구 데이터를 불러오는 중 입니다...</h1>}>
      {checkMobile ? <RProgramMobile /> : <RProgram />}
    </Suspense>
  );
};

export default RPMain;
