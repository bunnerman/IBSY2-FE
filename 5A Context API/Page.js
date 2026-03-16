import { useContext } from "react";
import { ThemeContext } from "../App.js";

function Page() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
    padding: "20px"
  };

  return (
    <div style={style}>
      <h1>{theme} mode</h1>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}	

export default Page;
