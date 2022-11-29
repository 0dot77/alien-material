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

// Btn Test
import { pageState } from '../data/atom';
import { useRecoilState } from 'recoil';
import GifFlying from '../components/HumanResearch/GifFlying';
import { useEffect } from 'react';

export default function HeadOffice() {
  // 외계물질 관찰일지 -> 휴먼 관찰일지
  const [isHuman, setIsHuman] = useRecoilState(pageState);
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });
  const [desktopThirdSectionRef, inViewThird] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    const timeout = setTimeout(() => setIsHuman((prev) => !prev), 300000);
    return () => clearTimeout(timeout);
  }, [isHuman]);
  return (
    <>
      {isHuman ? <GifFlying /> : null}
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
