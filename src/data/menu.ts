import type { MenuItem } from "@/types/MenuItem";
import { MenuGroup } from "@/types/MenuItem";

export const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Hem",
    to: "/",
    order: 0,
    group: MenuGroup.MAIN,
    showOnMobile: true,
  },
  {
    id: "booking",
    label: "Bokning",
    to: "/bokning",
    order: 10,
    group: MenuGroup.MAIN,
    showOnMobile: true,
  },
  {
    id: "calendar",
    label: "Kalender",
    to: "/kalender",
    order: 20,
    group: MenuGroup.MAIN,
    showOnMobile: true,
  },
  {
    id: "behind-the-scenes",
    label: "Bakom kulisserna",
    to: "/bakom-kulisserna",
    order: 30,
    group: MenuGroup.MAIN,
    showOnMobile: true,
  },
  {
    id: "about-us",
    label: "Om oss",
    to: "/om-oss",
    order: 40,
    group: MenuGroup.MAIN,
    showOnMobile: true,
  },
  {
    id: "contact",
    label: "Kontakt",
    to: "/kontakt",
    order: 50,
    group: MenuGroup.MAIN,
    showOnMobile: true,
  },
];
