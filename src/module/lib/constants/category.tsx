import { Status, TaskSquare, TickCircle } from "iconsax-reactjs";

export const categories = [
  {
    label: "To Do",
    count: 20,
    icon: <TaskSquare size="26" color="#CFB7E8" variant="Bold" />,
    activeIcon: <TaskSquare size="26" color="#FFFFFF" variant="Bold" />,
    boxBg: "#CFB7E8",
    countBg: "#F9F3FF",
    textColor: "#464B50",
    value: "to-do",
  },
  {
    label: "In Progress",
    count: 20,
    icon: <Status size="26" color="#F6BE38" variant="Bold" />,
    activeIcon: <Status size="26" color="#FFF" variant="Bold" />,
    boxBg: "#F6BE38",
    countBg: "#FBF4E4",
    textColor: "#464B50",
    value: "in-progress",
  },
  {
    label: "Completed",
    count: 18,
    icon: <TickCircle size="26" color="#75C5C1" variant="Bold" />,
    activeIcon: <TickCircle size="26" color="#fff" variant="Bold" />,
    boxBg: "#75C5C1",
    countBg: "#E9F5F7",
    textColor: "#464B50",
    value: "completed",
  },
];
