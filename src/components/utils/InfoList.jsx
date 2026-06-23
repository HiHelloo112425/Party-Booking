import InfoCard from "./InfoCard";

const noticeCards = [
  {
    label: "Minimum Guests:",
    before: "All party packages require a minimum of ",
    highlight: "30 guests",
    after: " to ensure a full and festive experience.",
    color: "primary-red",
  },
  {
    label: "Down Payment:",
    before: "A ",
    highlight: "₱2,000",
    after: " down payment is needed to confirm your reservation. This secures your chosen date and time slot.",
    color: "primary-yellow",
  },
  {
    label: "Payment Options:",
    before: "You can pay directly at your chosen McDonald's branch. We also accept ",
    highlight: "Credit Card",
    after: " (Visa and Mastercard) as payment.",
    color: "primary-red",
  },
  {
    label: "Payment Deadline:",
    before: "Down payment must be made within ",
    highlight: "3 days",
    after: " of online booking.",
    color: "primary-yellow",
  },
];

function InfoList() {
  return (
    <div className="flex flex-col justify-center mt-15 mx-5 lg:mx-auto gap-5">
      {noticeCards.map((card, index) => (
        <InfoCard key={index} {...card} />
      ))}
    </div>
  );
}

export default InfoList;