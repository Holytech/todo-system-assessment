import { Status, TaskSquare, TickCircle } from "iconsax-reactjs";

export const categories = [
  {
    label: "To Do",
    count: 20,
    icon: <TaskSquare size="26" color="#FFFFFF" variant="Bold" />,
    boxBg: "#CFB7E8",
    countBg: "#F9F3FF",
    iconColor: "white",
    textColor: "#464B50",
  },
  {
    label: "In Progress",
    count: 20,
    icon: <Status size="26" color="#F6BE38" variant="Bold" />,
    boxBg: "white",
    countBg: "#FBF4E4",
    iconColor: "#464B50",
  },
  {
    label: "Completed",
    count: 18,
    icon: <TickCircle size="26" color="#75C5C1" variant="Bold" />,
    boxBg: "white",
    countBg: "#E9F5F7",
    iconColor: "#464B50",
  },
];
