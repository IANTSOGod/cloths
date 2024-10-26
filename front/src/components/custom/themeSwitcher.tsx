import { useContext } from "react";
import { ThemeContext } from "../hooks/useTheme";
import { Button } from "../ui/button";

export default function ThemeSwitcher() {
  const { theme,toggleTheme } = useContext(ThemeContext);
  return (
    <div>
        {theme}
      <Button onClick={toggleTheme}>switch theme</Button>
    </div>
  );
}
