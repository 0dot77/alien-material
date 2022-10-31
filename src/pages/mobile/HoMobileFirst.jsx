import styled from 'styled-components';
import MainText from '../../components/MainText';
import MainVideo from '../../components/MainVideo';
import Logo from '../../components/Logo';

const FirstLayout = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 20% 30% 50%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

export default function HoMobileFirst() {
  return (
    <FirstLayout>
      <Logo logoSize={'8rem'} />
      <MainText
        enFontSize={'.5rem'}
        krFontSize={'.25rem'}
      />
      <MainVideo />
    </FirstLayout>
  );
}
