import styled from "@emotion/styled";
import {
  baseAnimation,
  fadeInLeft,
  fadeInRight,
  fadeOutLeft,
  fadeOutRight,
} from "@/styles/animation";

export const PageContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

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

export const MainContentContainer = styled.div`
  display: flex;
  justify-content: center;
  transition: width 0.3s ease;
  flex: 1;
  height: 100%;
  transition: width 0.3s ease;

  &.fadeInRight {
    ${baseAnimation(fadeInRight)}
  }

  &.fadeOutRight {
    ${baseAnimation(fadeOutRight)}
  }
`;

export const MainContentCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  color: ${(props) => props.theme.text};
  box-shadow: 0 0 20px ${(props) => props.theme.cardShadow};
  background-color: ${(props) => props.theme.cardBackground};
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 0px;
  overflow-y: auto;
`;
