import styled, { keyframes } from 'styled-components';
import { MainLogoPng, MainLogoWebp } from '../assets/images';
import { useNavigate } from 'react-router-dom';

export const LogoAnim = keyframes`
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
    cursor: ${(props) => (props.url ? 'pointer' : 'default')};
    animation: ${LogoAnim} 3s ease-in-out infinite alternate;
  }
`;

/**
 * @param {string} logoSize rem 사용
 * @param {string} marginTop rem 사용
 */
export default function Logo({ logoSize, url = false }) {
  const nav = useNavigate();
  return (
    <LogoContainer
      url={url}
      logoSize={logoSize}
      onClick={() => {
        if (url) {
          nav('/');
        }
      }}
    >
      <picture>
        <source
          draggable="false"
          srcSet={MainLogoWebp}
          type="image/webp"
        ></source>
        <img
          src={MainLogoPng}
          draggable="false"
          alt="main-logo"
        />
      </picture>
    </LogoContainer>
  );
}
