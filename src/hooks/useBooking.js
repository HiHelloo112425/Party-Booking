import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Image1 from "../assets/image-1.png";
import Image2 from "../assets/image-2.png";
import Image3 from "../assets/image-3.png";
import Image4 from "../assets/boss-bossing.gif";
import McdoMeal from "../assets/meal.svg";
import {
  carouselData,
  foodPackages,
  addOns,
  timeSlots,
  availableDateAndTime,
} from "../data/bookingData";

export function useBooking() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const carouselRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [timeSelected, selectTime] = useState();
  const [assignTime, setAssignTime] = useState(null);

  const { bookingSchedule } = location.state || {};
  const { where, when } = bookingSchedule || {};

  const [schedule, setSchedule] = useState({
    date: bookingSchedule?.when ?? "",
    time: "",
    room: "",
    venue: bookingSchedule?.where ?? "",
  });
  const steps = [
    {
      number: 1,
      title: "Schedule",
      desc: "Select your preferred date, time and venue",
      object: schedule,
    },
    {
      number: 2,
      title: "Party Package",
      desc: "Select your preferred date, time and venue",
    },
    {
      number: 3,
      title: "Your Details",
      desc: "Enter yours and the celebrant's details",
    },
    {
      number: 4,
      title: "Review Booking",
      desc: "Double check the details you've placed",
    },
    { number: 5, title: "Payment", desc: "Select your preferred payment" },
    {
      number: 6,
      title: "Confirmation",
      desc: "Congratulations! You're all set!",
    },
  ];
  const step = steps.find((data) => data.number === currentStep);

  const updateSchedule = (field, value) => {
    setSchedule((prev) => ({ ...prev, [field]: value }));
  };

  const resetSchedule = () => {
    setSchedule({ date: "", time: "", room: "", venue: "" });
  };

  const navigateToHome = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  return {
    schedule,
    updateSchedule,
    resetSchedule,
    currentStep,
    setCurrentStep,
    where,
    when,
    navigateToHome,
    steps,
    step,
    carouselRef,
    availableDateAndTime,
    open,
    setOpen,
    setAssignTime,
    timeSlots,
    timeSelected,
    selectTime,
    assignTime,
    carouselData,
    foodPackages,
    addOns,
  };
}
