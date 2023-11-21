import React, { useState } from "react";

const ThemeSwitcher = ({ themes }) => {
  const [activeThemeIndex, setActiveThemeIndex] = useState(0);
  var index = 0;
  const activeTheme = themes[activeThemeIndex];

  const handleThemeChange = () => {
    index += 1;
    if (index > themes.length) index = 0;
    setActiveThemeIndex(index);
  };

  return (
    <div style={{ backgroundColor: activeTheme }}>
      <ul>
        <button onClick={handleThemeChange}>change</button>
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
