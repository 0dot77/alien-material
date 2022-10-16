import styled, { keyframes } from 'styled-components';
import { MainLogoPng, MainLogoWebp } from '../assets/images';

const LogoAnim = keyframes`
    from {
        transform: rotateY(0deg);
    }

    to {
        transform: rotateY(180deg);
    }
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: ${(props) => props.logoSize};
    animation: ${LogoAnim} 3s ease-in-out infinite alternate;
  }
`;

/**
 * @param {string} logoSize rem 사용
 * @param {string} marginTop rem 사용
 */
export default function Logo({ logoSize }) {
  return (
    <LogoContainer logoSize={logoSize}>
      <picture>
        <source
          srcSet={MainLogoWebp}
          type="image/webp"
        ></source>
        <img
          src={MainLogoPng}
          alt="main-logo"
        />
      </picture>
    </LogoContainer>
  );
}
