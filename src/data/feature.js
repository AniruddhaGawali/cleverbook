import { MdOutlineInventory,MdOutlineShield,MdOutlineHourglassEmpty } from "react-icons/md";

const featuresList = [
  {
    id: 1,
    title: "Overstocking and Stockouts",
    description:
      "Avoid the costly errors of overstocking and stockouts with our real-time inventory tracking.",
    icon: <MdOutlineInventory />,
  },
  {
    id: 2,
    title: "Manual Tracking Errors",
    description:
      "Eliminate human errors with automated inventory updates and precise tracking.",
    icon: <MdOutlineShield />,
  },
  {
    id: 3,
    title: "Lack of Real-Time Data",
    description:
      "Stay ahead of the competition with instant access to up-to-date inventory information.",
    icon: <MdOutlineHourglassEmpty />,
  },
];

export default featuresList;
