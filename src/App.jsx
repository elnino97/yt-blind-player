import { useState } from "react";

import "./App.css";
import { Input, MediaPlayer } from "./components";
import { getYouTubeVideoId } from "./utils/getVideoId";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [currentVideo, setCurrentVideo] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  return (
    <main>
      <section style={{ display: "flex", flexDirection: "column" }}>
        <Input
          inputEventHandler={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button
          onClick={() => {
            setCurrentVideo(
              `https://www.youtube.com/embed/${getYouTubeVideoId(
                inputValue
              )}?autoplay=1`
            );
            setIsVideoVisible(false);
          }}
          style={{ marginTop: 8, marginBottom: 8 }}
        >
          Play
        </button>
      </section>
      {currentVideo && (
        <>
          <div style={{ overflow: "hidden", position: "relative" }}>
            <section>
              <MediaPlayer src={currentVideo} />
            </section>
            {!isVideoVisible && (
              <div
                style={{
                  width: 500,
                  height: 450,
                  backgroundColor: "black",
                  top: 2,
                  right: 2,
                  position: "absolute",
                }}
              >
                <p
                  style={{ color: "white", fontSize: 64, textAlign: "center" }}
                >
                  HIDDEN
                </p>
                <p
                  style={{ color: "white", fontSize: 24, textAlign: "center" }}
                >
                  Hover lower for media controls
                </p>
              </div>
            )}
          </div>
          <button
            style={{ marginTop: 24 }}
            onClick={() => {
              setIsVideoVisible(!isVideoVisible);
            }}
          >
            {!isVideoVisible ? "Reveal video" : "Hide video"}
          </button>
        </>
      )}
    </main>
  );
}

export default App;
