import styled from 'styled-components';

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  div {
    padding-bottom: 1rem;
    /* 영문 폰트 */
    .eng {
      font-size: ${(props) => props.enFontSize};
    }
    p {
      padding-bottom: 0.5rem;
      text-align: center;
      font-size: ${(props) => props.krFontSize};
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
        <p className="eng">We're a secret agency.</p>
        <p krFontSize={krFontSize}>우리는 비밀 기관입니다.</p>
      </div>
      <div>
        <p className="eng">Scientists, politicians, and entrepreneurs from all over the world are our members.</p>
        <p>세계 각국의 과학자, 정치인, 기업가들이 우리의 구성원입니다.</p>
      </div>
      <div>
        <p className="eng">
          We are working to protect the Earth from extraterrestrial forces that threaten its security.
        </p>
        <p>우리는 지구의 안보를 위협하는 외계세력으로부터 지구를 지키기 위해 일하고 있습니다.</p>
      </div>
    </TextContainer>
  );
}
