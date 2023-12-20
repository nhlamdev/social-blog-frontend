interface NavigationItem {
  display: string;
  url: string;
}

export const clientNavigation: NavigationItem[] = [
  { display: "CONTENT", url: "/content" },
  { display: "SERIES", url: "/series" },
  { display: "AUTHOR", url: "/author" },
];
