import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { logosPngs } from '../../assets/institutionLogo';
import useWindowSize from '../../hooks/useWindowSize';
import InstitutionDescription from '../../components/InstitutionDescription';
import Institution from '../../components/Institution';

const ThirdLayout = styled.section`
  width: 100%;
`;

const InstitutionContainer = styled.section`
  width: 100%;
  height: 100%;
  grid-row: 1;
  position: relative;
`;

const LogoContainer = styled.article`
  width: 100vw;
  grid-row: 2;
  background-color: rgba(7, 18, 170, 1);
  display: flex;
  z-index: 10;
`;

const LogoBox = styled.div`
  width: 20rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform-origin: center;

  img {
    object-fit: contain;
    width: 100%;
    height: 90%;
  }
`;

const Logo = styled.img`
  position: absolute;
`;

const GsapContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  position: relative;
  grid-template-rows: 80% 20%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

// * 스타일은 최상단 컴포넌트에 두고, 데이터만 따로 처리하기
// * 데이터를 참조할 때 배열을 사용해서, state의 값과 연동하기

export default function HoDesktopThird({ desktopThirdSectionRef, inViewThird }) {
  // Institutions
  const INSTITUTIONS_LIST = ['boltFamily', 'boltCenter', 'genetica', 'apac', 'mecha', 'chocheng', 'ionic', 'seti'];

  // resize check
  const size = useWindowSize();

  // gsap variables
  const el = useRef();
  const tl = useRef();
  const logoRef = useRef();

  // state
  const [logoCount, setLogoCount] = useState(0);

  useEffect(() => {
    // 해당 화면에 있을 때는 Loop 될 수 있도록 하기
    if (inViewThird) {
      const logoBoxWidth = logoRef.current.offsetWidth;
      const ctx = gsap.context(() => {
        tl.current = gsap
          .timeline()
          .fromTo(
            '.logo',
            {
              x: '100vw',
            },
            {
              x: window.innerWidth / 2 - logoBoxWidth / 2,
              duration: 1.5,
            }
          )
          .fromTo(
            '.des',
            {
              y: '50vh',
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1.5,
            }
          )
          .fromTo(
            '.inst',
            { y: '50vh', opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.5,
            }
          )
          .to('.logo', {
            x: 0 - logoBoxWidth,
            duration: 1.5,
          })
          .to('.inst', {
            y: '10vh',
            opacity: 0,
            duration: 1.5,
          })
          .to('.des', {
            y: '10vh',
            opacity: 0,
            duration: 1.5,
            onComplete: () => {
              setLogoCount((current) => {
                if (current === INSTITUTIONS_LIST.length - 1) {
                  return (current = 0);
                }
                return current + 1;
              });
            },
          });
      }, el);
      return () => {
        // clean up
        ctx.revert();
      };
    }
    if (!inViewThird) {
      setLogoCount(0);
    }
  }, [size, inViewThird, logoCount]);

  return (
    <ThirdLayout ref={desktopThirdSectionRef}>
      <GsapContainer ref={el}>
        <InstitutionContainer>
          <InstitutionDescription logoState={INSTITUTIONS_LIST[logoCount]} />
          <Institution logoState={INSTITUTIONS_LIST[logoCount]} />
        </InstitutionContainer>
        <LogoContainer>
          <LogoBox>
            <Logo
              src={logosPngs[logoCount]}
              alt="logo"
              ref={logoRef}
              className="logo"
            />
          </LogoBox>
        </LogoContainer>
      </GsapContainer>
    </ThirdLayout>
  );
}
