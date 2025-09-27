import { JSX } from "react";

export interface ISidebarMenu {
  name: string;
  linkTo: string;
  icon: JSX.Element;
  children?: {
    name: string;
    linkTo: string;
  }[];
}
