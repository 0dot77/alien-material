import styled from 'styled-components';
import NoiseObjMobile from '../../components/NoiseObjMobile';
const SecondLayout = styled.section`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
`;

export default function HoMobileSecond() {
  return (
    <SecondLayout>
      <NoiseObjMobile />
    </SecondLayout>
  );
}
