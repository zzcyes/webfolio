import { css, keyframes } from "@emotion/react";

const animationFillMode = "both";

export const baseAnimation = (
  animationName: string,
  animationDuration?: string
) => css`
  animation-name: ${animationName};
  animation-duration: ${animationDuration ?? "1s"};
  animation-fill-mode: ${animationFillMode};
`;

export const fadeInLeft = keyframes`
   from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeOutLeft = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

export const fadeOutRight = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
`;

export const fadeInRight = keyframes`
   from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;
