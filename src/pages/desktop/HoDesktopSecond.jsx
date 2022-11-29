import styled from 'styled-components';
import NoiseObj from '../../components/NoiseObj';
import { pageState } from '../../data/atom';
import { useRecoilState } from 'recoil';
import HumanScaning from '../../components/HumanResearch/HumanScaning';

const SecondLayout = styled.section`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

export default function HoDesktopSecond() {
  const [isHacked] = useRecoilState(pageState);
  return <SecondLayout>{isHacked ? <HumanScaning sc={[0.25, 0.25, 0.25]} /> : <NoiseObj />}</SecondLayout>;
}
