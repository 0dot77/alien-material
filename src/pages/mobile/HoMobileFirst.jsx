import styled from 'styled-components';
import Logo from '../../components/Logo';
import MainText from '../../components/MainText';
import MainVideo from '../../components/MainVideo';

const FirstLayout = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 20% 30% 50%;
`;

export default function HoMobileFirst() {
  return (
    <FirstLayout>
      <Logo logoSize={'10rem'} />
      <MainText
        enFontSize={'.5rem'}
        krFontSize={'.5rem'}
      />
      <MainVideo
        videoWidth={'90vw'}
        videoHeight={'90%'}
      />
    </FirstLayout>
  );
}
