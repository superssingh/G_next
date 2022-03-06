"use strict";

export const menus = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/posts" },
  { name: "Courses", path: "/courses" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
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
