import { useState } from "react";
import "./App.css";

function App() {
  const [emoji, setEmoji] = useState("😀");
  const [size, setSize] = useState(150);

  const emojis = ["😀", "😍", "😎", "🤩", "❤️", "🌸"];

  return (
    <div className="container">
      <h1>Emoji Editor 😄</h1>
      <p>Click an emoji and change its size!</p>

      <div className="emoji-picker">
        {emojis.map((e, i) => (
          <button key={i} onClick={() => setEmoji(e)}>
            {e}
          </button>
        ))}
      </div>

      <div className="emoji-display">
        <div className="emoji-box" style={{ fontSize: `${size}px` }}>
          {emoji}
        </div>
        <input
          type="range"
          min="50"
          max="300"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
