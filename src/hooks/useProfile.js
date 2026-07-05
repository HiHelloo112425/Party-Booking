import React, { useState, useEffect, use } from "react";
import { useNavigate } from "react-router-dom";

export function useProfile() {
  const [process, setProcess] = useState("View Profile");
  const [folder, setFolder] = useState("Upcoming Bookings");
  const [selectedItem, setSelectedItem] = useState();
  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate("/profile");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  return {
    navigateToProfile,
    navigateToLogin,
    setProcess,
    process,
    folder,
    setFolder,
    selectedItem,
    setSelectedItem,
  };
}
