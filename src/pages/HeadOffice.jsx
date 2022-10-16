import { useInView } from 'react-intersection-observer';
import { MobileLayout, DesktopLayout } from '../components/Layout';
import { useMediaQuery } from 'react-responsive';
import HoDesktopFirst from './desktop/HoDesktopFirst';
import HoDesktopSecond from './desktop/HoDesktopSecond';
import HoMobileFirst from './mobile/HoMobileFirst';
import HoMobileSecond from './mobile/HoMobileSecond';
import HoDesktopThird from './desktop/HoDesktopThird';
import HoDesktopFourth from './desktop/HoDesktopFourth';

export default function HeadOffice() {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });
  const [desktopFirstSectionRef, inViewFirst] = useInView({
    threshold: 0.75,
    triggerOnce: false,
  });

  const [desktopThirdSectionRef, inViewThird] = useInView({
    threshold: 0.01,
    triggerOnce: false,
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
          <HoDesktopFirst desktopFirstSectionRef={desktopFirstSectionRef} />
          <HoDesktopSecond />
          <HoDesktopThird
            desktopThirdSectionRef={desktopThirdSectionRef}
            inViewThird={inViewThird}
          />
          <HoDesktopFourth />
        </DesktopLayout>
      )}
    </>
  );
}
