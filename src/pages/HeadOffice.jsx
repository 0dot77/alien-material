import { MobileLayout, DesktopLayout } from '../components/Layout';
import { useMediaQuery } from 'react-responsive';
import HoDesktopFirst from './desktop/HoDesktopFirst';
import HoMobileFirst from './mobile/HoMobileFirst';

export default function HeadOffice() {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  return (
    <>
      {isMobile ? (
        <MobileLayout>
          <HoMobileFirst />
        </MobileLayout>
      ) : (
        <DesktopLayout>
          <HoDesktopFirst />
        </DesktopLayout>
      )}
    </>
  );
}
