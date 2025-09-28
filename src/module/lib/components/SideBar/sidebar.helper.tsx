import {
  Call,
  Category,
  Edit,
  Folder2,
  MenuBoard,
  MessageEdit,
  Note1,
  NotificationBing,
  People,
  Stickynote,
  TaskSquare,
} from "iconsax-reactjs";
import { LuNewspaper } from "react-icons/lu";
import { ISidebarMenu } from "../../utility/types/sideBar";

export const sideBarContents: ISidebarMenu[] = [
  {
    name: "Home",
    linkTo: "/",
    icon: <Category size="24" color="#7988A9" />,
  },
  {
    name: "MKVanBinnen",
    linkTo: "#",
    icon: <Stickynote size="24" color="#7988A9" />,
  },
  {
    name: "Document Management",
    linkTo: "#",
    icon: <Folder2 size="24" color="#7988A9" />,
  },
  {
    name: "Patient Information",
    linkTo: "#",
    icon: <People size="24" color="#7988A9" />,
  },
  {
    name: "Agenda",
    linkTo: "#",
    icon: <Note1 size="24" color="#7988A9" />,
  },
  {
    name: "My Department",
    linkTo: "#",
    icon: <LuNewspaper size="24" color="#7988A9" />,
    children: [
      { name: "News", linkTo: "#" },
      { name: "Members", linkTo: "#" },
      { name: "To - Do", linkTo: "/to-do" },
      { name: "Form Task", linkTo: "#" },
      { name: "Agenda", linkTo: "#" },
      { name: "Follow up system", linkTo: "#" },
      { name: "Group Settings", linkTo: "#" },
    ],
  },
  {
    name: "Phone numbers",
    linkTo: "#",
    icon: <Call size="24" color="#7988A9" />,
  },
  {
    name: "My to do Protocols",
    linkTo: "#",
    icon: <TaskSquare size="24" color="#7988A9" />,
  },
  {
    name: "My Notifications",
    linkTo: "#",
    icon: <NotificationBing size="24" color="#7988A9" />,
  },
  {
    name: "Knowledge Base",
    linkTo: "#",
    icon: <MenuBoard size="24" color="#7988A9" />,
  },
  {
    name: "Super Admin",
    linkTo: "#",
    icon: <MessageEdit size="24" color="#7988A9" />,
  },
  {
    name: "Admin",
    linkTo: "#",
    icon: <Edit size="24" color="#7988A9" />,
    children: [
      { name: "Agenda", linkTo: "#" },
      { name: "News", linkTo: "#" },
      { name: "Poll", linkTo: "#" },
      { name: "Department Rules", linkTo: "#" },
      { name: "Follow up system", linkTo: "#" },
    ],
  },
];
