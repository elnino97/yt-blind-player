export const MediaPlayer = ({ src }) => (
  <iframe
    width="500"
    height="500"
    src={src}
    allowFullScreen
    title="YouTube Video Player"
  />
);
