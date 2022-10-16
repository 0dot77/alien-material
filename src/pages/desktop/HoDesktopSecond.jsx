import styled from 'styled-components';
import NoiseObj from '../../components/NoiseObj';

const SecondLayout = styled.section`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

export default function HoDesktopSecond() {
  return (
    <SecondLayout>
      <NoiseObj />
    </SecondLayout>
  );
}
