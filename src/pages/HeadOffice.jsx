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

export default function HeadOffice() {
  // 외계물질 관찰일지 -> 휴먼 관찰일지
  const [isHuman] = useRecoilState(pageState);
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });
  const [desktopThirdSectionRef, inViewThird] = useInView({
    threshold: 1,
  });

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
