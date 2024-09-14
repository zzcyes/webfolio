import { useEffect } from "react";
import styled from "@emotion/styled";
import { useToast } from "@/common/hooks";
import { FaTimes } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { useConfig } from "@/common/hooks";
import { css } from "@emotion/css";
import { normalizeCssSizeNumber } from "@/common/utils";

const Toast = () => {
  const { open, message, closeToast } = useToast();
  const [{ layout, mediaQuery }] = useConfig();
  const isWeb = useMediaQuery({ minWidth: mediaQuery.web });

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        closeToast();
      }, 3000);
    }
  }, [closeToast, open]);

  if (!open) return null;

  return (
    <ToastContainer
      className={css`
        ${isWeb
          ? "bottom:0px; right: 0px; min-width: 200px; max-width: 400px;"
          : `bottom: ${layout.mainContent.padding}px; right: ${
              layout.mainContent.padding
            }px; width: calc(100% - ${
              normalizeCssSizeNumber(layout.mainContent.padding) * 2
            }px); `}
      `}
    >
      <ToastMessage>{message}</ToastMessage>
      <CloseButton onClick={closeToast}>
        <FaTimes />
      </CloseButton>
    </ToastContainer>
  );
};

const ToastContainer = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.accent};
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ToastMessage = styled.div`
  flex-grow: 1;
  margin-right: 10px;
`;

const CloseButton = styled.div`
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
`;

export default Toast;
