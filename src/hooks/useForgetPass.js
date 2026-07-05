import { useNavigate } from "react-router-dom";
export function useForgetPass() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  return {
    navigateToLogin,
  };
}
