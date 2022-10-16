import styled, { keyframes } from 'styled-components';

const TextAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(1rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  /* 폰트 */
  .eng {
    font-size: ${(props) => props.enFontSize};
  }
  .kr {
    font-size: ${(props) => props.krFontSize};
  }

  /* 텍스트 애니메이션 */

  .e1 {
    animation: ${TextAnimation} 1s forwards;
  }

  .k1 {
    opacity: 0;
    animation: ${TextAnimation} 1s forwards;
    animation-delay: 1s;
  }

  .e2 {
    opacity: 0;
    animation: ${TextAnimation} 1s forwards;
    animation-delay: 2s;
  }

  .k2 {
    opacity: 0;
    animation: ${TextAnimation} 1s forwards;
    animation-delay: 3s;
  }

  .e3 {
    opacity: 0;
    animation: ${TextAnimation} 1s forwards;
    animation-delay: 4s;
  }

  .k3 {
    opacity: 0;
    animation: ${TextAnimation} 1s forwards;
    animation-delay: 5s;
  }

  div {
    padding-bottom: 1rem;
    p {
      padding-bottom: 0.5rem;
      text-align: center;
      cursor: default;
    }
  }
`;

/**
 *
 * @param {string} enFontSize rem 사용
 * @param {string} krFontSize rem 사용
 */

export default function MainText({ enFontSize = '1.25rem', krFontSize = '1rem' }) {
  return (
    <TextContainer
      enFontSize={enFontSize}
      krFontSize={krFontSize}
    >
      <div>
        <p className="eng e1">We're a secret agency.</p>
        <p className="kr k1">우리는 비밀 기관입니다.</p>
      </div>
      <div>
        <p className="eng e2">Scientists, politicians, and entrepreneurs from all over the world are our members.</p>
        <p className="kr k2">세계 각국의 과학자, 정치인, 기업가들이 우리의 구성원입니다.</p>
      </div>
      <div>
        <p className="eng e3">
          We are working to protect the Earth from extraterrestrial forces that threaten its security.
        </p>
        <p className="kr k3">우리는 지구의 안보를 위협하는 외계세력으로부터 지구를 지키기 위해 일하고 있습니다.</p>
      </div>
    </TextContainer>
  );
}
