import { FaSun, FaMoon } from "react-icons/fa";
import ToggleButton from "./ToggleButton";

const ThemeToggleButton = ({
  style,
  themeMode,
  onClick,
}: {
  style?: React.CSSProperties;
  themeMode: "light" | "dark";
  onClick?: () => void;
}) => {
  return (
    <ToggleButton
      style={style}
      icons={[<FaSun />, <FaMoon />]}
      active={themeMode === "light"}
      onToggle={() => onClick?.()}
    />
  );
};

export default ThemeToggleButton;
