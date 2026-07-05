import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Image1 from "../assets/image-1.png";
import Image2 from "../assets/image-2.png";
import Image3 from "../assets/image-3.png";
import Image4 from "../assets/boss-bossing.gif";
const carouselData = [
  {
    image: Image1,
    title: "Grimace Theme",
    content: `Step into a world of purple fun where Grimace is the star of the show. It's a high-energy celebration filled with vibrant berry colors, and playful games.`,
  },
  {
    image: Image2,
    title: "Happy Meal Theme",
    content: `Celebrate with the iconic joy of a Happy Meal! This classic theme brings all their McDonald's favorites to life for a truly happy party.`,
  },
  {
    image: Image3,
    title: "Madagascar Theme",
    content: `Join Alex, Marty, and the whole gang for a wild adventure! This Madagascar theme promises a party filled with laughter and jungle fun.`,
  },
  {
    image: Image4,
    title: "Boss bossing Theme",
    content: `Bossing kamusta ang buhay buhay`,
  },
];
export function useHome() {
  const toastRef = useRef();
  const navigate = useNavigate();
  const [bookingSchedule, setBookingSchedule] = useState({
    where: "",
    when: "",
  });
  const updateSchedule = (field, value) => {
    setBookingSchedule((prev) => ({ ...prev, [field]: value }));
  };

  const navigateToBooking = () => {
    if (bookingSchedule.where !== "" && bookingSchedule.when !== "") {
      navigate("/home/booking", { state: { bookingSchedule } });
    } else {
      toastRef.current.notify();
    }
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  return {
    bookingSchedule,
    updateSchedule,
    toastRef,
    navigateToBooking,
    navigateToLogin,
    carouselData,
  };
}
