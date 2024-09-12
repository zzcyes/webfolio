import styled from "@emotion/styled";
import { useToast } from "@/common/hooks";
import { FaTimes } from "react-icons/fa";

const Toast = () => {
  const { open, message, closeToast } = useToast();

  if (!open) return null;

  return (
    <ToastContainer>
      <ToastMessage>{message}</ToastMessage>
      <CloseButton onClick={closeToast}>
        <FaTimes />
      </CloseButton>
    </ToastContainer>
  );
};

const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.background};
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 200px;
  max-width: 400px;
`;

const ToastMessage = styled.div`
  flex-grow: 1;
  margin-right: 10px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.background};
  cursor: pointer;
  font-size: 16px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export default Toast;
