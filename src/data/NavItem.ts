export interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href: string;
  }
  
  export const NAV_ITEMS: Array<NavItem> = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Life",
      href: "/roomtour",
    },
    {
      label: "Projects",
      href: "/roomtour",
    },
    {
      label: "Podcast",
      href: "/roomtour",
    },
  ];