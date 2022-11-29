import styled from 'styled-components';
import institutionsData from '../data/institutionsData';
import { pageState } from '../data/atom';
import { useRecoilState } from 'recoil';

const InstitutionContainer = styled.div`
  z-index: 0;
  width: 100%;
  height: 100%;
  opacity: 0;

  position: relative;

  picture {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    object-fit: contain;
  }

  source,
  img {
    position: absolute;
    width: auto;
    height: 60%;
  }
`;

export default function Institution({ logoState }) {
  const [isHacked] = useRecoilState(pageState);
  return (
    <InstitutionContainer className="inst">
      {isHacked ? (
        <picture>
          <img
            src={institutionsData[logoState].hakcedInsImg}
            alt="hacked images"
          />
        </picture>
      ) : (
        <picture>
          <source srcSet={institutionsData[logoState].institutionImg[0]} />
          <img
            src={institutionsData[logoState].institutionImg[1]}
            alt="institution"
          />
        </picture>
      )}
    </InstitutionContainer>
  );
}
