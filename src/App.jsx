import { useState } from "react";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<CreateAccount />} />
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  );
}

export default App;
