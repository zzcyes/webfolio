import React from "react";
import { ToggleButtonWrapper } from "./styled";

const ToggleButton = ({
  style,
  icons,
  active,
  onToggle,
}: {
  style?: React.CSSProperties;
  icons: [React.ReactNode, React.ReactNode];
  active: boolean;
  onToggle: () => void;
}) => {
  const [activeIcon, inactiveIcon] = icons;

  return (
    <>
      <ToggleButtonWrapper style={style} onClick={() => onToggle?.()}>
        {active ? activeIcon : inactiveIcon}
      </ToggleButtonWrapper>
    </>
  );
};

export default ToggleButton;
