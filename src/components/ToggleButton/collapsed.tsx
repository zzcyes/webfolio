import { FaBars, FaTimes } from "react-icons/fa";
import ToggleButton from "./ToggleButton";

const FaIcons = [<FaBars />, <FaTimes />];

const CollapsedToggleButton = ({
  style,
  reverse,
  collapsed,
  onToggle,
}: {
  style?: React.CSSProperties;
  reverse?: boolean;
  collapsed: boolean;
  onToggle: () => void;
}) => {
  const icons: [React.ReactNode, React.ReactNode] = reverse
    ? [<FaTimes />, <FaBars />]
    : [<FaBars />, <FaTimes />];

  return (
    <ToggleButton
      style={style}
      icons={icons}
      active={collapsed}
      onToggle={onToggle}
    />
  );
};

export default CollapsedToggleButton;
