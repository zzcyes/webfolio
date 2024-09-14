import styled from "@emotion/styled";
import {
  baseAnimation,
  fadeInLeft,
  fadeOutLeft,
  fadeInDown,
  fadeOutUp,
} from "@/styles/animation";

export const SidebarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  flex-shrink: 0;
  overflow: hidden;

  &.fadeInLeft {
    ${baseAnimation(fadeInLeft)}
  }

  &.fadeOutLeft {
    ${baseAnimation(fadeOutLeft)}
  }
`;

export const SideBarContainerMobile = styled.div`
  position: fixed;
  top: 65px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: ${(props) => props.theme.text};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${(props) => props.theme.background};
  transition: height 0.2s ease-in-out;

  &.fadeInDown {
    animation: ${fadeInDown} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.fadeOutUp {
    animation: ${fadeOutUp} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const SidebarContentMobile = styled.div`
  padding: 20px;
  overflow-y: auto;
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.border};
  padding: 20px;
`;

export const SidebarTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.accent};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

export const SidebarContent = styled.div`
  padding: 20px;
  overflow-y: auto;
`;
