import { useNavigate } from "react-router-dom";

export function useCreateAccount() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  return {
    navigateToLogin,
  };
}
