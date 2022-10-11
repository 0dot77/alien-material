import styled from 'styled-components';
import Logo from '../../components/Logo';
import MainText from '../../components/MainText';
import MainVideo from '../../components/MainVideo';

const FirstLayout = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 20% 20% 60%;
`;

export default function HoDesktopFirst() {
  return (
    <FirstLayout>
      <Logo logoSize={'20rem'} />
      <MainText />
      <MainVideo />
    </FirstLayout>
  );
}
