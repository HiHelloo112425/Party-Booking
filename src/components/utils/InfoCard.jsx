const colorMap = {
  "primary-red": {
    text: "text-primary-red",
    border: "border-t-primary-red",
  },
  "primary-yellow": {
    text: "text-primary-yellow",
    border: "border-t-primary-yellow",
  },
};

function InfoCard({ color, label, before, highlight, after }) {
  const colors = colorMap[color];

  return (
    <div
      className={`flex flex-col md:flex-row border border-gray-200 border-t-5 ${colors.border} rounded-3xl bg-white p-5 gap-1`}
    >
      <p className="font-bold">{label} </p>
      <p>
        {before}
        <span className={`font-bold ${colors.text}`}> {highlight}</span>
        {after}
      </p>
    </div>
  );
}

export default InfoCard;
