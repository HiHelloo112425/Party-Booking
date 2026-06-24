import { useState, useEffect } from "react";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Profile from "./pages/Profile";
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <div>
        <p className="w-full">
          Width: {screenSizeWidth} Screen: {screen}
        </p>
      </div>
    </div>
  );
}

export default App;
