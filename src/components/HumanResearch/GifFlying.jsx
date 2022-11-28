import { gifs } from '../../assets/HumanResearch/HumanResearchFiles';
import styled, { keyframes } from 'styled-components';

const Xanimation = keyframes`
100% {
    transform: translateX( calc(100vw - 10rem) );
  }
`;

const Yanimation = keyframes`
100% {
    transform: translateY( calc(400vh - 10rem) );
  }
`;

const GifContainer = styled.div`
  position: absolute;
  width: 10rem;
  img {
    width: 100%;
  }

  &.x0 {
    animation: ${Xanimation} 5s linear infinite alternate;
  }

  .y0 {
    animation: ${Yanimation} 10s linear infinite alternate;
  }

  &.x1 {
    animation: ${Xanimation} 7s linear infinite alternate;
  }

  .y1 {
    animation: ${Yanimation} 30s linear infinite alternate;
  }
  &.x2 {
    animation: ${Xanimation} 10s linear infinite alternate;
  }

  .y2 {
    animation: ${Yanimation} 15s linear infinite alternate;
  }
  &.x3 {
    animation: ${Xanimation} 25s linear infinite alternate;
  }

  .y3 {
    animation: ${Yanimation} 5s linear infinite alternate;
  }

  &.x4 {
    animation: ${Xanimation} 20s linear infinite alternate;
  }

  .y4 {
    animation: ${Yanimation} 10s linear infinite alternate;
  }

  &.x5 {
    animation: ${Xanimation} 12.5s linear infinite alternate;
  }

  .y5 {
    animation: ${Yanimation} 19s linear infinite alternate;
  }

  &.x6 {
    animation: ${Xanimation} 19.1s linear infinite alternate;
  }

  .y6 {
    animation: ${Yanimation} 9s linear infinite alternate;
  }
`;

const GifFlying = () => {
  return (
    <>
      {gifs.map((idx, gif) => {
        return (
          <GifContainer
            key={idx}
            className={`x${gif}`}
          >
            <img
              className={`y${gif}`}
              src={gifs[gif]}
              alt="flygin gif"
            />
          </GifContainer>
        );
      })}
    </>
  );
};

export default GifFlying;
