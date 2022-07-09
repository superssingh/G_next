"use strict";

export const menus = [
  {
    name: "Home",
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    name: "Blog",
    path: "/posts",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      </svg>
    ),
  },
  {
    name: "Shop",
    path: "/shop",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
  },
  {
    name: "Courses",
    path: "/courses",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
  },
  {
    name: "About Us",
    path: "/about",
    icon: (
      <svg
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
      >
        <path d="M 4.0097656 3 C 2.9179106 3 2.0097656 3.9049841 2.0097656 4.9980469 L 2 23 L 6 19 L 20 19 C 21.093063 19 22 18.093063 22 17 L 22 5 C 22 3.9069372 21.093063 3 20 3 L 4.0097656 3 z M 4.0097656 5 L 20 5 L 20 17 L 5.171875 17 L 4.0039062 18.167969 L 4.0097656 5 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 15 L 13 15 L 13 11 L 11 11 z" />
      </svg>
    ),
  },
  {
    name: "Contact Us",
    path: "/contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
        />
      </svg>
    ),
  },
];

export const footermenus = [
  { name: "About Us", path: "/about" },
  { name: "📜-Blog", path: "/posts" },
  { name: "Contact Us", path: "/contact" },
  { name: "📚-Courses", path: "/courses" },
  { name: "Terms of Service", path: "/terms" },
  { name: "🏠-Shop", path: "/shop" },
  { name: "Privacy Policy", path: "/privacypolicy" },
];

export const categories = [
  { name: "Programming", image: "", id: "1" },
  { name: "Productivity", image: "", id: "2" },
  { name: "Technology", image: "", id: "3" },
  { name: "Top / Best", image: "", id: "4" },
];

export const social = [
  { name: "Instagram", link: "https://www.instagram.com/gogixer/", logo: "" },
  {
    name: "Youtube",
    link: "https://www.youtube.com/channel/UC1-UohTcazossMwQY1ns2nA",
    logo: "",
  },
  { name: "Twitter", link: "https://twitter.com/gogixer", logo: "" },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/company/gogixer",
    logo: "",
  },
  { name: "Facebook", link: "https://www.facebook.com/gogixer", logo: "" },
];

export const COMPANY_NAME = "Gogixer";
export const ACTION_INVALID = "INVALID ACTION";
export const NETWORK_ERROR = "Network connection error";

export const HAMBURGER_CLOSE = "hamburger-close";
export const HAMBURGER_OPEN = "hamburger-open";
export const HAMBURGER_LINE = "hamburger_lines";
export const MENU_DEFAULT = "menus";
export const MOBILE_OPEN = "mobile-open";
export const MOBILE_CLOSE = "mobile-close";

export const getPosts = () => {
  return postsUrl;
};

export const getImagePath = () => {
  return imageURL;
};
