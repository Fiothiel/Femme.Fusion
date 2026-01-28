export type MenuItem = {
  id: string;
  label: string;
  to: string;
  order?: number;
  group?: MenuGroup;
  showOnMobile?: boolean;
  children?: MenuItem[];
};

export const MenuGroup = {
  MAIN: 'main',
  FOOTER: 'footer',
  SOCIAL: 'social',
} as const;

export type MenuGroup = typeof MenuGroup[keyof typeof MenuGroup];
