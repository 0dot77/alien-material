import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { logosPngs } from '../../assets/institutionLogo';
import InstitutionDescription from '../../components/InstitutionDescription';
import Institution from '../../components/Institution';
import Slider from 'react-slick';

const ThirdLayout = styled.section`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

export default function HoMobileThird() {
  return <ThirdLayout></ThirdLayout>;
}
