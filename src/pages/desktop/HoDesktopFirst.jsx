import Logo from '../../components/Logo';
import MainText from '../../components/MainText';
import MainVideo from '../../components/MainVideo';
import { FullpageSection } from '@ap.cx/react-fullpage';

export default function HoDesktopFirst() {
  return (
    <FullpageSection style={{ width: '100%', height: '100vh', display: 'grid', gridTemplateRows: '20% 20% 60%' }}>
      <Logo logoSize={'20rem'} />
      <MainText />
      <MainVideo />
    </FullpageSection>
  );
}
