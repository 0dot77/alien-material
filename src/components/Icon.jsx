import styled from 'styled-components';
import notion from '../assets/notion.png';
import credit from '../assets/credit.png';
import { useNavigate } from 'react-router-dom';

const IconContainer = styled.div`
  width: 20mvw;
  object-fit: contain;
  display: flex;
  margin-right: ${(props) => (props.isMobile ? '2rem' : '1rem')};
  img {
    width: ${(props) => (props.isMobile ? '10vw' : '100%')};
    cursor: pointer;
  }
`;

export default function Icon({ isMobile = false }) {
  const nav = useNavigate();
  return (
    <IconContainer isMobile={isMobile}>
      <img
        src={notion}
        alt="notion"
        draggable="false"
        onClick={() => {
          window.open('https://amrp.notion.site/540c4b7cfdc54ea9ba1a3a105dfdedda?v=f7241cb5ade544199a3d8a603974ac92');
        }}
      />
      <img
        src={credit}
        alt="credit"
        draggable="false"
        onClick={() => {
          nav('/credit');
        }}
      />
    </IconContainer>
  );
}
