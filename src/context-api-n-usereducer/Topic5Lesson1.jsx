import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");

// context is functionally declared on a parent component who separated file from its deep-nested children 
// (meaning its children is also export default, not just common components)
function ModernApp() {  // theme context usually placed at main App component
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext value={theme}>
      <Toolbar />
      <button onClick={() => setTheme("dark")}>Toggle theme</button>
    </ThemeContext>
  );
}

function Toolbar() {    // Toolbar has child name ThemedButton
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button class={`btn-${theme}`}>Click me</button>;
}

export default function Topic5Lesson1() {
  return <ModernApp />
}
