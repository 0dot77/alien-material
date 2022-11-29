import styled from 'styled-components';
import NoiseObjMobile from '../../components/NoiseObjMobile';
import { pageState } from '../../data/atom';
import { useRecoilState } from 'recoil';
import HumanScaning from '../../components/HumanResearch/HumanScaning';

const SecondLayout = styled.section`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
`;

export default function HoMobileSecond() {
  const [isHacked] = useRecoilState(pageState);
  return <SecondLayout>{isHacked ? <HumanScaning sc={[0.08, 0.08, 0.08]} /> : <NoiseObjMobile />}</SecondLayout>;
}
