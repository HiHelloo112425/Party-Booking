import Image1 from "../assets/image-1.png";
import Image2 from "../assets/image-2.png";
import Image3 from "../assets/image-3.png";
import Image4 from "../assets/boss-bossing.gif";
import McdoMeal from "../assets/meal.svg";

export const availableDateAndTime = [
  { date: "June 13", startTime: "2:00 pm", endTime: "4:00 pm" },
  { date: "June 14", startTime: "2:00 pm", endTime: "4:00 pm" },
];

export const timeSlots = [
  { id: 0, start: "8:00 AM", end: "10:00 AM" },
  { id: 1, start: "11:00 AM", end: "1:00 PM" },
  { id: 2, start: "2:00 PM", end: "4:00 PM" },
  { id: 3, start: "5:00 PM", end: "7:00 PM" },
  { id: 4, start: "8:00 PM", end: "10:00 PM" },
  { id: 5, start: "8:00 PM", end: "10:00 PM" },
  { id: 6, start: "8:00 PM", end: "10:00 PM" },
  { id: 7, start: "8:00 PM", end: "10:00 PM" },
];

export const carouselData = [
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

export const foodPackages = [
  {
    id: 1,
    image: McdoMeal,
    title: "Food Package 1",
    price: 149.0,
    orderList: [
      { order: "1-pc. Chicken Mcdo" },
      { order: "McSpaghetti" },
      { order: "12 oz. Coke" },
    ],
  },
  {
    id: 2,
    image: McdoMeal,
    title: "Food Package 2",
    price: 189.0,
    orderList: [
      { order: "2-pc. Chicken McDo" },
      { order: "Regular Fries" },
      { order: "12 oz. Coke" },
    ],
  },
  {
    id: 3,
    image: McdoMeal,
    title: "Food Package 3",
    price: 229.0,
    orderList: [
      { order: "1-pc. Chicken McDo" },
      { order: "McSpaghetti" },
      { order: "Regular Fries" },
      { order: "16 oz. Coke" },
    ],
  },
  {
    id: 4,
    image: McdoMeal,
    title: "Food Package 4",
    price: 259.0,
    orderList: [
      { order: "2-pc. Chicken McDo" },
      { order: "McSpaghetti" },
      { order: "Sundae" },
      { order: "16 oz. Coke" },
    ],
  },
  {
    id: 5,
    image: McdoMeal,
    title: "Food Package 4",
    price: 259.0,
    orderList: [
      { order: "2-pc. Chicken McDo" },
      { order: "McSpaghetti" },
      { order: "Sundae" },
      { order: "16 oz. Coke" },
    ],
  },
  {
    id: 6,
    image: McdoMeal,
    title: "Food Package 4",
    price: 259.0,
    orderList: [
      { order: "2-pc. Chicken McDo" },
      { order: "McSpaghetti" },
      { order: "Sundae" },
      { order: "16 oz. Coke" },
    ],
  },
  {
    id: 7,
    image: McdoMeal,
    title: "Food Package 4",
    price: 259.0,
    orderList: [
      { order: "2-pc. Chicken McDo" },
      { order: "McSpaghetti" },
      { order: "Sundae" },
      { order: "16 oz. Coke" },
    ],
  },
];

export const addOns = [
  {
    id: 1,
    image: McdoMeal,
    title: "Happy Meal",
    price: 89.0,
    orderList: [{ order: "Featured toy of your choice" }],
  },
  {
    id: 2,
    image: McdoMeal,
    title: "McDonald's Cap",
    price: 89.0,
    orderList: [{ order: "High quality authentic Mcdonald's cap" }],
  },
  {
    id: 3,
    image: McdoMeal,
    title: "McDonald's Cap",
    price: 89.0,
    orderList: [{ order: "High quality authentic Mcdonald's cap" }],
  },
  {
    id: 4,
    image: McdoMeal,
    title: "McDonald's Cap",
    price: 89.0,
    orderList: [{ order: "High quality authentic Mcdonald's cap" }],
  },
  {
    id: 5,
    image: McdoMeal,
    title: "McDonald's Cap",
    price: 89.0,
    orderList: [{ order: "High quality authentic Mcdonald's cap" }],
  },
  {
    id: 6,
    image: McdoMeal,
    title: "McDonald's Cap",
    price: 89.0,
    orderList: [{ order: "High quality authentic Mcdonald's cap" }],
  },
  {
    id: 7,
    image: McdoMeal,
    title: "McDonald's Cap",
    price: 89.0,
    orderList: [{ order: "High quality authentic Mcdonald's cap" }],
  },
];
export const orderList = [
  {
    id: 1,
    orderNumber: 1,
    foodPackage: "Food Package 1",
    qty: 5,
  },
  {
    id: 2,
    orderNumber: 2,
    foodPackage: "Food Package 4",
    qty: 5,
  },
];
