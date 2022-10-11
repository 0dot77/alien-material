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
    width: 20rem;
    animation: ${LogoAnim} 3s linear infinite alternate;
  }
`;

export default function Logo() {
  return (
    <LogoContainer>
      <picture>
        <soruce
          srcset={MainLogoWebp}
          type="image/webp"
        ></soruce>
        <img
          src={MainLogoPng}
          alt="main-logo"
        />
      </picture>
    </LogoContainer>
  );
}
