import styled from 'styled-components';
import institutionsData from '../data/institutionsData';
import { pageState } from '../data/atom';
import { useRecoilState } from 'recoil';

const DescriptionContainer = styled.article`
  width: 100%;
  height: ${(props) => (props.isMobile ? '60%' : '50%')};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
`;

const SubContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;

  picture {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: ${(props) => (props.isMobile ? '80%' : '50%')};
      border: ${(props) => (props.isHacked ? '' : '5px solid rgba(9, 18, 163, 1)')};
    }
  }
`;

const SubTextContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  font-family: 'KoPubWorldDotum';

  .header {
    font-size: ${(props) => (props.isMobile ? '0.75rem' : '1.25rem')};
    margin-bottom: 0.5rem;
  }

  .contents {
    font-size: ${(props) => (props.isMobile ? '0.5rem' : '1rem')};
    margin-bottom: 0.5rem;
  }
`;

export default function InstitutionDescription({ logoState, isMobile = false }) {
  const [isHacked] = useRecoilState(pageState);
  return (
    <DescriptionContainer
      isMobile={isMobile}
      className="des"
    >
      <SubContainer
        isMobile={isMobile}
        isHacked={isHacked}
      >
        {logoState === 'boltFamily' ? null : isHacked ? (
          <picture>
            <img
              src={institutionsData[logoState].hackedPersonImg}
              alt="hacked person img"
            />
          </picture>
        ) : (
          <picture>
            <source
              srcSet={institutionsData[logoState].institutionPerson[0]}
              type="image/webp"
            />
            <img
              src={institutionsData[logoState].institutionPerson[1]}
              alt="institution-person"
            />
          </picture>
        )}
        <SubTextContainer isMobile={isMobile}>
          {institutionsData[logoState].texts.map((text, index) => (
            <p
              className={institutionsData[logoState].textState[index]}
              key={index}
            >
              {text}
            </p>
          ))}
        </SubTextContainer>
      </SubContainer>
    </DescriptionContainer>
  );
}
