import React from "react";
import ThemeSwitcher from "./theme";

function App() {
  return (
    <div>
      <ThemeSwitcher themes={["#00ffff", "#006400", "#ff7f50"]} />
    </div>
  );
}

export default App;
