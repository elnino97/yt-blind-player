import { useState } from "react";

import "./App.css";
import { Input, MediaPlayer } from "./components";
import { getYouTubeVideoId } from "./utils/getVideoId";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [currentVideo, setCurrentVideo] = useState(
    "https://www.youtube.com/embed/null"
  );
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
              `https://www.youtube.com/embed/${getYouTubeVideoId(inputValue)}`
            );
            setIsVideoVisible(false);
          }}
        >
          Play
        </button>
      </div>
      <div style={{ overflow: "hidden" }}>
        <section style={{ position: "relative" }}>
          <MediaPlayer src={currentVideo} isVideoVisible={isVideoVisible} />
        </section>
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
