import styled from 'styled-components';

const ThirdLayout = styled.section`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

export default function HoMobileThird() {
  return <ThirdLayout></ThirdLayout>;
}
