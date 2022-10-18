import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { amrpLogos } from '../../assets/programSource';

/**
 * @param {string} logo AM or RP
 */

const ProgramLogoContainer = styled.article`
  width: 100%;
  height: 100%;
  cursor: pointer;

  picture {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    transition: background ease-in-out 0.75s;
    object-fit: contain;
    &:hover {
      background: #ffffff;
    }
    .am {
      width: 50%;
      padding: 1rem;
    }
    .rp {
      width: 50%;
    }
  }
`;

export default function ProgramLogo({ logo = null }) {
  const nav = useNavigate();
  return (
    <ProgramLogoContainer
      onClick={() => {
        if (logo === 'am') {
          nav('./news');
        } else {
          nav('./research');
        }
      }}
    >
      <picture>
        <source srcSet={logo === 'am' ? amrpLogos[0] : amrpLogos[2]} />
        <img
          src={logo === 'am' ? amrpLogos[1] : amrpLogos[3]}
          alt="amrp logos"
          className={logo}
        />
      </picture>
    </ProgramLogoContainer>
  );
}
