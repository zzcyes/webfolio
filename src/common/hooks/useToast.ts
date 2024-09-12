import { useRecoilState } from "recoil";
import { toastState } from "@/store/toast.state";

const useToast = () => {
  const [{ open, message }, setToast] = useRecoilState(toastState);

  const showToast = (message: string) => {
    setToast({
      open: true,
      message,
    });
  };
  const closeToast = () => {
    setToast({
      open: false,
      message: "",
    });
  };
  return {
    open,
    message,
    showToast,
    closeToast,
  };
};

export default useToast;
