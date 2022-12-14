import styled from 'styled-components';
import { amNews } from '../../../assets/programSource';
import AMLayout from '../../../components/ForthPages/AMLayout';

const NewsContainer = styled.article`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const News = styled.div`
  width: 100%;
  picture {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const FallBackMessage = styled.div`
  color: white;
`;

export default function AMnews() {
  return (
    <AMLayout>
      <NewsContainer>
        <News>
          <picture>
            <source srcSet={amNews[1]} />
            <img
              src={amNews[0]}
              alt="amnews_1"
            />
          </picture>
        </News>
        <News>
          <picture>
            <source srcSet={amNews[3]} />
            <img
              src={amNews[2]}
              alt="amnews_1"
            />
          </picture>
        </News>
      </NewsContainer>
    </AMLayout>
  );
}
