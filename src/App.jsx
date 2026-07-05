import { useState, useEffect } from "react";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import BookingForm from "./pages/BookingForm";
import Profile from "./pages/Profile";
import ForgetPassword from "./pages/ForgetPassword.jsx";
import ResetPassowrd from "./pages/ResetPassword.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  const [screen, setScreen] = useState("mobile");
  const [screenSizeWidth, setScreenSizeWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSizeWidth(width);
      if (width >= 1536) setScreen("2xl");
      else if (width >= 1280) setScreen("xl");
      else if (width >= 1024) setScreen("lg");
      else if (width >= 768) setScreen("md");
      else if (width >= 640) setScreen("sm");
      else setScreen("xs");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div>
        <p className="w-full">
          Width: {screenSizeWidth} Screen: {screen}
        </p>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home/booking" element={<BookingForm />} />
        <Route path="/login/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword" element={<ResetPassowrd />} />
      </Routes>
    </div>
  );
}

export default App;
