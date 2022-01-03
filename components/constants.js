"use strict";

const postsUrl = "http://localhost:1337/blogs";
const graphURL = "http://localhost:1337/graphql";
const imageURL = "http://localhost:1337";

export const menus = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/posts" },
  { name: "Courses", path: "/courses" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

export const COMPANY_NAME = "GOGIXER";
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

export const getVideoKey = (movie_id) => {
  const videoURL = videoPath1 + movie_id + videoPath2 + apiKey + videoLanguage;
  return videoURL;
};

export const getVideoLink = (videoKey) => {
  const videoURL = youtubePath + videoKey;
  return videoURL;
};

export const apiURL = () => {
  return apiPath;
};

export const apiURL_id = (id) => {
  return apiPath + id;
};

export const getGraphURL = () => {
  return graphURL;
};
