import { forwardRef, useImperativeHandle } from "react";
import { ToastContainer, toast } from "react-toastify";

const ToastMessage = forwardRef(({ toastStatus, toastMessage }, ref) => {
  const options = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    theme: "dark",
  };

  const notify = () => {
    if (toastStatus === "success") toast.success(toastMessage, options);
    else if (toastStatus === "error") toast.error(toastMessage, options);
    else if (toastStatus === "warn") toast.warn(toastMessage, options);
    else if (toastStatus === "info") toast.info(toastMessage, options);
    else toast(toastMessage, options);
  };

  useImperativeHandle(ref, () => ({ notify }));

  return <ToastContainer />;
});

export default ToastMessage;
