import styled from 'styled-components';

const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    width: 50vw;
    height: 80%;
  }
`;

export default function MainVideo() {
  return (
    <VideoContainer>
      <iframe
        src="https://www.youtube.com/embed/2Vndg9IBB5w"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </VideoContainer>
  );
}
