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
  display: flex;
  flex-direction: column;
`;

const InstitutionContainer = styled.section`
  width: 100%;
  height: 100%;
`;
const GsapContainer = styled.div`
  width: 100%;
  height: 80vh;
`;

const LogoContainer = styled(Slider)`
  width: 100%;
  height: 20vh;
  background-color: rgba(7, 18, 170, 1);

  .slick-slide div {
    outline: none;
    height: 20vh;
    img {
      object-fit: contain;
      width: 80%;
      height: 100%;
    }
  }
`;

const HoMobileThird = ({ desktopThirdSectionRef, inViewThird }) => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '20px',
    slidesToShow: 3,
    speed: 1000,
    arrows: false,
    adoptiveHeight: true,
    focusOnSelect: true,
  };

  // Institutions
  const INSTITUTIONS_LIST = ['boltFamily', 'boltCenter', 'genetica', 'apac', 'mecha', 'chocheng', 'ionic', 'seti'];

  // gsap variables
  const el = useRef();
  const tl = useRef();

  // state
  const [logoCount, setLogoCount] = useState(0);

  useEffect(() => {
    // 해당 화면에 있을 때는 Loop 될 수 있도록 하기
    if (inViewThird) {
      const ctx = gsap.context(() => {
        tl.current = gsap
          .timeline()
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
          );
      }, el);
      return () => {
        // clean up
        ctx.revert();
      };
    }
    if (!inViewThird) {
      setLogoCount(0);
    }
  }, [inViewThird, logoCount]);

  return (
    <ThirdLayout ref={desktopThirdSectionRef}>
      <GsapContainer ref={el}>
        <InstitutionContainer>
          <InstitutionDescription
            isMobile={true}
            logoState={INSTITUTIONS_LIST[logoCount]}
          />
          <Institution logoState={INSTITUTIONS_LIST[logoCount]} />
        </InstitutionContainer>
      </GsapContainer>
      <LogoContainer
        {...settings}
        afterChange={(idx) => {
          setLogoCount(idx);
        }}
      >
        {logosPngs.map((logo, idx) => {
          return (
            <div key={idx}>
              <img
                src={logo}
                alt="logo"
                className="logo"
              />
            </div>
          );
        })}
      </LogoContainer>
    </ThirdLayout>
  );
};

export default HoMobileThird;
