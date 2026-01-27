import React, { useState } from "react";

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  const themeStyle = {
    width: "350px",
    margin: "20px auto",
    padding: "20px",
    textAlign: "center",
    borderRadius: "8px",
    backgroundColor: darkMode ? "#222" : "#fff",
    color: darkMode ? "#fff" : "#000",
    border: "1px solid #ccc"
  };

  return (
    <div style={themeStyle}>
      <p>
        This is a preview of the theme switcher component.
        Click the button to toggle between light and dark modes.
      </p>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
