import styled from 'styled-components';
import institutionsData from '../data/InstitutionsData';

const DescriptionContainer = styled.article`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;

  picture {
    width: 50%;

    img {
      width: 80%;
      border: 5px solid rgba(9, 18, 163, 1);
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
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .contents {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export default function InstitutionDescription({ logoState }) {
  return (
    <DescriptionContainer className="des">
      <SubContainer>
        {logoState === 'boltFamily' ? null : (
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
        <SubTextContainer>
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
