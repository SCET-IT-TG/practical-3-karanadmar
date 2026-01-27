import React, { useState } from "react";

function TweetInput() {
  const [tweet, setTweet] = useState("");

  const count = tweet.length;
  const isOver = count > 50;
  const isDisabled = count === 0 || isOver;

  const boxStyle = {
    width: "300px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center"
  };

  const textStyle = {
    width: "100%",
    height: "70px"
  };

  return (
    <div style={boxStyle}>
      <h3>What's happening?</h3>

      <textarea
        style={textStyle}
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
      />

      <p style={{ color: isOver ? "red" : "black" }}>
        {count}/50
      </p>

      <button disabled={isDisabled}>
        Tweet
      </button>
    </div>
  );
}

export default TweetInput;
