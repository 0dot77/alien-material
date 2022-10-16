import styled from 'styled-components';
import logos from '../../assets/institutionLogo';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import useWindowSize from '../../hooks/useWindowSize';
import { institutionImgPngs, institutionImgWebps } from '../../assets/institution';
import { institutionPersonPngs, institutionPersonWebps } from '../../assets/institutionPerson';

const ThirdLayout = styled.section`
  width: 100%;
`;

const InstitutionContainer = styled.section`
  width: 100%;
  height: 100%;
  grid-row: 1;
  position: relative;
`;

const InstitutionDescription = styled.article`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      div {
        margin-bottom: 1rem;
      }
    }
    soruce,
    img {
      width: 80%;
      border: 5px solid rgba(7, 18, 170, 1);
    }
  }
`;

const Institution = styled.picture`
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  object-fit: contain;

  source,
  img {
    position: absolute;
    width: auto;
    height: 60%;
  }
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
    object-fit: cover;
    width: 100%;
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

/**
 * count에 맞춰서 기관 이미지 올라오도록 만들기
 */

export default function HoDesktopThird({ desktopThirdSectionRef, inViewThird }) {
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
              duration: 3,
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
              duration: 3,
            }
          )
          .fromTo(
            '.inst',
            { y: '50vh', opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 3,
            }
          )
          .to('.logo', {
            x: 0 - logoBoxWidth,
            duration: 3,
          })
          .to('.inst', {
            y: '10vh',
            opacity: 0,
            duration: 3,
          })
          .to('.des', {
            y: '10vh',
            opacity: 0,
            duration: 3,
            onComplete: () => {
              setLogoCount((current) => {
                if (current > institutionImgPngs.length) {
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
          <InstitutionDescription className="des">
            <div>
              <picture>
                <source srcSet={institutionPersonPngs[logoCount]} />
                <img
                  src={institutionPersonWebps[logoCount]}
                  alt="institution"
                />
              </picture>
              <div>
                <div>
                  <h2>Mecha:(L) (메카라지)</h2>
                  <h2>James Banks, Chairman (회장 제임스 뱅크스)</h2>
                </div>
                <div>
                  <p>Space Age New Weapons Development and Training Agency</p>
                  <p>우주시대 신무기 개발 및 양성 기관</p>
                </div>
              </div>
            </div>
          </InstitutionDescription>
          <Institution className="inst">
            <source srcSet={institutionImgWebps[logoCount]} />
            <img
              src={institutionImgPngs[logoCount]}
              alt="mecaragi"
            />
          </Institution>
        </InstitutionContainer>
        <LogoContainer>
          <LogoBox className="logo-tree-1">
            <Logo
              src={logos[logoCount]}
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
