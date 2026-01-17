/* import type { MenuItem } from "@/types/MenuItem";
import { MenuGroup } from "@/types/MenuItem";

export const menuItems: MenuItem[] = [
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
  {
    id: "booking",
    label: "Bokning",
    to: "/bokning",
    order: 10,
    group: MenuGroup.FOOTER,
    showOnMobile: true,
  },
  {
    id: "calendar",
    label: "Kalender",
    to: "/kalender",
    order: 20,
    group: MenuGroup.FOOTER,
    showOnMobile: true,
  },
  {
    id: "about-us",
    label: "Om oss",
    to: "/om-oss",
    order: 30,
    group: MenuGroup.FOOTER,
    showOnMobile: true,
  },
  {
    id: "contact",
    label: "Kontakt",
    to: "/kontakt",
    order: 40,
    group: MenuGroup.FOOTER,
    showOnMobile: true,
  },
    {
    id: "support-us",
    label: "Stötta oss",
    to: "/stotta-oss",
    order: 50,
    group: MenuGroup.FOOTER,
    showOnMobile: true,
  },
];
 */

import type { MenuItem } from "@/types/MenuItem";
import { MenuGroup } from "@/types/MenuItem";

export const menuItems: MenuItem[] = [
  /* =====================
     Main menu
     ===================== */

  {
    id: "company",
    label: "Företag",
    to: "/foretag",
    order: 10,
    group: MenuGroup.MAIN,
    showOnMobile: true,
    children: [
      {
        id: "company-show",
        label: "Show till företagsevent",
        to: "/foretag/show",
        order: 10,
        group: MenuGroup.MAIN,
        showOnMobile: true,
      },
      {
        id: "company-dance",
        label: "Dans som kick-off & teambuilding",
        to: "/foretag/dans",
        order: 20,
        group: MenuGroup.MAIN,
        showOnMobile: true,
      },
      {
        id: "company-booking",
        label: "Skicka förfrågan",
        to: "/bokning",
        order: 40,
        group: MenuGroup.MAIN,
        showOnMobile: true,
      },
    ],
  },

  {
    id: "dance-courses",
    label: "Dans & kurser",
    to: "/dans-kurser",
    order: 20,
    group: MenuGroup.MAIN,
    showOnMobile: true,
    children: [
      {
        id: "courses",
        label: "Kurser & dansklasser",
        to: "/kurser",
        order: 10,
        group: MenuGroup.MAIN,
        showOnMobile: true,
      },
      {
        id: "group-dance",
        label: "Möhippa & gruppbokning",
        to: "/privat/dans",
        order: 20,
        group: MenuGroup.MAIN,
        showOnMobile: true,
      },
      {
        id: "company-dance-link",
        label: "Dans för företag",
        to: "/foretag/dans",
        order: 30,
        group: MenuGroup.MAIN,
        showOnMobile: true,
      },
    ],
  },

  {
    id: "show",
    label: "Show",
    to: "/show",
    order: 30,
    group: MenuGroup.MAIN,
    showOnMobile: true,
  },

  {
    id: "calendar-main",
    label: "Kalender",
    to: "/kalender",
    order: 40,
    group: MenuGroup.MAIN,
    showOnMobile: true,
  },

  {
    id: "about",
    label: "Om oss",
    to: "/om-oss",
    order: 50,
    group: MenuGroup.MAIN,
    showOnMobile: true,
    children: [
      {
        id: "about-us",
        label: "Om Femme Fusion",
        to: "/om-oss",
        order: 10,
        group: MenuGroup.MAIN,
        showOnMobile: true,
      },
      {
        id: "behind-the-scenes",
        label: "Bakom kulisserna",
        to: "/bakom-kulisserna",
        order: 20,
        group: MenuGroup.MAIN,
        showOnMobile: true,
      },
      {
        id: "faq",
        label: "FAQ",
        to: "/faq",
        order: 30,
        group: MenuGroup.MAIN,
        showOnMobile: true,
      },
    ],
  },

  /* =====================
     Footer menu
     ===================== */

  {
    id: "footer-booking",
    label: "Bokning",
    to: "/bokning",
    order: 10,
    group: MenuGroup.FOOTER,
    showOnMobile: true,
  },
  {
    id: "footer-calendar",
    label: "Kalender",
    to: "/kalender",
    order: 20,
    group: MenuGroup.FOOTER,
    showOnMobile: true,
  },
  {
    id: "footer-about",
    label: "Om oss",
    to: "/om-oss",
    order: 30,
    group: MenuGroup.FOOTER,
    showOnMobile: true,
  },
  {
    id: "footer-contact",
    label: "Kontakt",
    to: "/kontakt",
    order: 40,
    group: MenuGroup.FOOTER,
    showOnMobile: true,
  },
  {
    id: "footer-support",
    label: "Stötta oss",
    to: "/stotta-oss",
    order: 50,
    group: MenuGroup.FOOTER,
    showOnMobile: true,
  },
];
