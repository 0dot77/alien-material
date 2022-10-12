import { MobileLayout, DesktopLayout } from '../components/Layout';
import { useMediaQuery } from 'react-responsive';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import HoDesktopFirst from './desktop/HoDesktopFirst';
import HoDesktopSecond from './desktop/HoDesktopSecond';
import HoMobileFirst from './mobile/HoMobileFirst';
import HoMobileSecond from './mobile/HoMobileSecond';

export default function HeadOffice() {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  return (
    <>
      {isMobile ? (
        <MobileLayout>
          <Fullpage>
            <FullPageSections>
              <HoMobileFirst />
              <HoMobileSecond />
            </FullPageSections>
          </Fullpage>
        </MobileLayout>
      ) : (
        <DesktopLayout>
          <Fullpage>
            <FullPageSections>
              <HoDesktopFirst />
              <HoDesktopSecond />
            </FullPageSections>
          </Fullpage>
        </DesktopLayout>
      )}
    </>
  );
}
