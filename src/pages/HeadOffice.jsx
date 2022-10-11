import { MobileLayout, DesktopLayout } from '../components/Layout';
import { useMediaQuery } from 'react-responsive';
import Logo from '../components/Logo';
import HoDesktopFirst from './desktop/HoDesktopFirst';

export default function HeadOffice() {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  return (
    <>
      {isMobile ? (
        <MobileLayout>모바일</MobileLayout>
      ) : (
        <DesktopLayout>
          <HoDesktopFirst />
        </DesktopLayout>
      )}
    </>
  );
}
