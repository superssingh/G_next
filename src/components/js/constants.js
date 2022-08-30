"use strict";

export const COMPANY_NAME = "Gogixer";
export const ACTION_INVALID = "INVALID ACTION";
export const NETWORK_ERROR = "Network connection error";
export const HAMBURGER_CLOSE = "hamburger-close";
export const HAMBURGER_OPEN = "hamburger-open";
export const HAMBURGER_LINE = "hamburger_lines";
export const MENU_DEFAULT = "menus";
export const MOBILE_OPEN = "mobile-open";
export const MOBILE_CLOSE = "mobile-close";

const imageFit = "&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60";

export const HeroImg = "../../public/images/codes.jpeg";

export const HomeMenu = {
  name: "Home",
  path: "/",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        strokeLinecap="round"
        strokeinejoin="round"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  ),
};

export const menus = [
  {
    name: "About",
    path: "/about",
    icon: (
      <svg
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="0"
        width="24px"
        height="24px"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 4.0097656 3 C 2.9179106 3 2.0097656 3.9049841 2.0097656 4.9980469 L 2 23 L 6 19 L 20 19 C 21.093063 19 22 18.093063 22 17 L 22 5 C 22 3.9069372 21.093063 3 20 3 L 4.0097656 3 z M 4.0097656 5 L 20 5 L 20 17 L 5.171875 17 L 4.0039062 18.167969 L 4.0097656 5 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 15 L 13 15 L 13 11 L 11 11 z"
        />
      </svg>
    ),
  },
  {
    name: "Articles",
    path: "/posts",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
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
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
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
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
  },
  {
    name: "Contact",
    path: "/contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
        />
      </svg>
    ),
  },
];

export const footermenus = [
  { name: "👤-About", path: "/about" },
  { name: "📝-Articles", path: "/posts" },
  { name: "📨-Contact", path: "/contact" },
  { name: "📚-Courses", path: "/courses" },
  { name: "🔏-Privacy Policy", path: "/privacypolicy" },
  { name: "🏠-Shop", path: "/shop" },
  { name: "📜-Terms of Service", path: "/terms" },
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

export const getPosts = () => {
  return postsUrl;
};

export const getImagePath = () => {
  return imageURL;
};

export const services = [
  {
    title: "Responsive Design",
    description:
      "Learn responsive user interface design with CSS, SASS, SCSS & tailwindCSS.",
    icon: "",
  },
  {
    title: "Frontend Development",
    description:
      "Learn frontend development most demanding skills- Javascript, ReactJS & NextJS.",
    icon: "",
  },
  {
    title: "Backend Development",
    description: "Learn how to built backend with NodeJS from scratch.",
    icon: "",
  },

  {
    title: "App Deployment ",
    description: "Learn deployment web app scratch.",
    icon: "",
  },
  {
    title: "Data Structure & Algorithum",
    description: "Learn data structure and algorithum.",
    icon: "",
  },
  {
    title: "Productivie Skills",
    description:
      "Learn essential personal development soft skills for productivity.",
    icon: "",
  },
];

export const socialLinks = [
  {
    name: "youtube",
    url: "https://www.youtube.com/channel/UC1-UohTcazossMwQY1ns2nA",
    icon: (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width="32px"
        height="32px"
      >
        <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z" />
      </svg>
    ),
  },
  {
    name: "twitter",
    url: "https://twitter.com/gogixer",
    icon: (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width="32px"
        height="32px"
      >
        <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
      </svg>
    ),
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/company/gogixer",
    icon: (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width="32px"
        height="32px"
      >
        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
      </svg>
    ),
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/gogixer/",
    icon: (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width="32px"
        height="32px"
      >
        <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
      </svg>
    ),
  },
];

export const reviews = [
  {
    name: "Unknown",
    comment: "Awesome website with best resources for web developers.",
    image:
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" +
      imageFit,
  },
  {
    name: "Unknown",
    comment: "Awesome website with best resources for web developers",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" +
      imageFit,
  },
  {
    name: "Unknown",
    comment: "Awesome website with best resources for web developers",
    image:
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" +
      imageFit,
  },
  {
    name: "Jane Cooper",
    comment: "Great explanation with amazing ways.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" +
      imageFit,
  },
  {
    name: "Jane Cooper",
    comment: "Great explanation with amazing ways.",
    image:
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" +
      imageFit,
  },
  {
    name: "Jane Cooper",
    comment: "Great explanation with amazing ways.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" +
      imageFit,
  },
  {
    name: "Unknown",
    comment: "Awesome website with best resources for web developers",
    image:
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" +
      imageFit,
  },
];
