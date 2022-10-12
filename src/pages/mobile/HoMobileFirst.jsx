import Logo from '../../components/Logo';
import MainText from '../../components/MainText';
import MainVideo from '../../components/MainVideo';
import { FullpageSection } from '@ap.cx/react-fullpage';

export default function HoMobileFirst() {
  return (
    <FullpageSection style={{ width: '100%', height: '100vh', display: 'grid', gridTemplateRows: '20% 30% 50%' }}>
      <Logo logoSize={'10rem'} />
      <MainText
        enFontSize={'.5rem'}
        krFontSize={'.5rem'}
      />
      <MainVideo
        videoWidth={'90vw'}
        videoHeight={'90%'}
      />
    </FullpageSection>
  );
}
