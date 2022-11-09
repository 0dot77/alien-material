import { useInView } from 'react-intersection-observer';
import { MobileLayout, DesktopLayout } from '../components/Layout';
import { useMediaQuery } from 'react-responsive';

// desktop
import HoDesktopFirst from './desktop/HoDesktopFirst';
import HoDesktopSecond from './desktop/HoDesktopSecond';
import HoDesktopThird from './desktop/HoDesktopThird';
import HoDesktopFourth from './desktop/HoDesktopFourth';

// mobile
import HoMobileFirst from './mobile/HoMobileFirst';
import HoMobileSecond from './mobile/HoMobileSecond';
import HoMobileThird from './mobile/HoMobileThird';
import HoMobileFourth from './mobile/HoMobileFourth';

export default function HeadOffice() {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  const [desktopThirdSectionRef, inViewThird] = useInView({
    threshold: 1,
  });

  return (
    <>
      {isMobile ? (
        <MobileLayout>
          <HoMobileFirst />
          <HoMobileSecond />
          <HoMobileThird
            desktopThirdSectionRef={desktopThirdSectionRef}
            inViewThird={inViewThird}
          />
          <HoMobileFourth />
        </MobileLayout>
      ) : (
        <DesktopLayout>
          <HoDesktopFirst />
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
