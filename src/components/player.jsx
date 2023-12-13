export const MediaPlayer = ({
  src,
  isVideoVisible,
  toggleVisibilityHandler,
}) => {
  return (
    <>
      <section style={{ position: "relative" }}>
        <iframe
          width="420"
          height="315"
          src={src}
          allowFullScreen
          title="YouTube Video Player"
        />
        {!isVideoVisible && (
          <div
            style={{
              width: 420,
              height: 315,
              backgroundColor: "black",
              top: -37,
              right: 2,
              position: "absolute",
              pointerEvents: "none",
            }}
          >
            <p style={{ color: "white", fontSize: 64 }}>HIDDEN</p>
            <p style={{ color: "white", fontSize: 24 }}>
              Use media controls below this text
            </p>
          </div>
        )}
      </section>
      <button
        style={{ marginTop: 24 }}
        onClick={() => toggleVisibilityHandler()}
      >
        {!isVideoVisible ? "Reveal video" : "Hide video"}
      </button>
    </>
  );
};
