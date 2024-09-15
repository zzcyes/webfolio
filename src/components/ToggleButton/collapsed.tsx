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
  const [collapsedIcon, expandedIcon] = reverse ? FaIcons.reverse() : FaIcons;

  return (
    <ToggleButton
      style={style}
      icons={[collapsedIcon, expandedIcon]}
      active={collapsed}
      onToggle={onToggle}
    />
  );
};

export default CollapsedToggleButton;
