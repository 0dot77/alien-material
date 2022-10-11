import styled from 'styled-components';

const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    width: ${(props) => props.videoWidth};
    height: ${(props) => props.videoHeight};
  }
`;

/**
 * @param {string} videoWidth vw 사용
 * @param {string} videoHeight % 사용
 */

export default function MainVideo({ videoWidth = '50vw', videoHeight = '80%' }) {
  return (
    <VideoContainer
      videoWidth={videoWidth}
      videoHeight={videoHeight}
    >
      <iframe
        src="https://www.youtube.com/embed/2Vndg9IBB5w"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </VideoContainer>
  );
}
