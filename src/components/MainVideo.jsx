import styled from 'styled-components';
import { videoFrameGif } from '../assets/images';

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  iframe {
    position: absolute;
    z-index: 10;
    width: 50vh;
    height: 50%;
    border: none;
    border-radius: 10px;
  }
`;

const GifContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${videoFrameGif});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

/**
 * @param {string} videoWidth vw 사용
 * @param {string} videoHeight % 사용
 */

export default function MainVideo({ videoWidth = '90%', videoHeight = '80%' }) {
  return (
    <VideoContainer
      videoWidth={videoWidth}
      videoHeight={videoHeight}
    >
      <GifContainer />
      <iframe
        src="https://www.youtube.com/embed/evTf7FHOD20"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      ></iframe>
    </VideoContainer>
  );
}
