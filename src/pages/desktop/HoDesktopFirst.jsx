import Logo from '../../components/Logo';
import MainText from '../../components/MainText';
import MainVideo from '../../components/MainVideo';
import styled from 'styled-components';

const FirstLayout = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 20% 20% 60%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

export default function HoDesktopFirst({ desktopFirstSectionRef }) {
  return (
    <FirstLayout ref={desktopFirstSectionRef}>
      <Logo logoSize={'20rem'} />
      <MainText />
      <MainVideo />
    </FirstLayout>
  );
}
