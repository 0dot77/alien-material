import { useInView } from 'react-intersection-observer';
import { MobileLayout, DesktopLayout } from '../components/Layout';
import { useMediaQuery } from 'react-responsive';
import { lazy, Suspense } from 'react';
import HoDesktopFirst from './desktop/HoDesktopFirst';
import HoDesktopSecond from './desktop/HoDesktopSecond';
import HoMobileFirst from './mobile/HoMobileFirst';
import HoMobileSecond from './mobile/HoMobileSecond';
import HoDesktopThird from './desktop/HoDesktopThird';
import HoDesktopFourth from './desktop/HoDesktopFourth';

const ThirdPageComponent = lazy(() => import('./desktop/HoDesktopThird'));

export default function HeadOffice() {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });
  // const [desktopFirstSectionRef, inViewFirst] = useInView({
  //   threshold: 0.75,
  //   triggerOnce: false,
  // });

  const [desktopThirdSectionRef, inViewThird] = useInView({
    threshold: 1,
  });

  return (
    <>
      {isMobile ? (
        <MobileLayout>
          <HoMobileFirst />
          <HoMobileSecond />
        </MobileLayout>
      ) : (
        <DesktopLayout>
          <HoDesktopFirst />
          <HoDesktopSecond />
          <Suspense fallback={<p>기관에게 수신 요청중...</p>}>
            <ThirdPageComponent
              desktopThirdSectionRef={desktopThirdSectionRef}
              inViewThird={inViewThird}
            />
          </Suspense>
          <HoDesktopFourth />
        </DesktopLayout>
      )}
    </>
  );
}
