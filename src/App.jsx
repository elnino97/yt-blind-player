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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <Input
          inputEventHandler={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button
          style={{ marginLeft: 8 }}
          onClick={() => {
            setCurrentVideo(
              `https://www.youtube.com/embed/${getYouTubeVideoId(
                inputValue
              )}?autoplay=1`
            );
            setIsVideoVisible(false);
          }}
        >
          Play
        </button>
      </div>
      <div style={{ overflow: "hidden", position: "relative" }}>
        <section>
          <MediaPlayer src={currentVideo} />
        </section>
        {!isVideoVisible && (
          <div
            style={{
              width: 500,
              height: 493,
              backgroundColor: "black",
              top: -36,
              right: 2,
              position: "absolute",
            }}
          >
            <p style={{ color: "white", fontSize: 64 }}>HIDDEN</p>
            <p style={{ color: "white", fontSize: 24 }}>
              Use media controls below this text
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
    </main>
  );
}

export default App;
