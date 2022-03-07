import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./assets/gogixer.png";
import * as TagName from "./constants";
import SocialWidget from "./SocialWidget";
const menus = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/posts" },
  // { name: "Courses", path: "/courses" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <div className="Navigation">
      <div>
        <header className="Navbar">
          <a className="w-48 center-center mx-8" href="/">
            <Image src={Logo} alt={TagName.COMPANY_NAME} />
          </a>

          <ul className={TagName.MENU_DEFAULT}>
            <li>
              {menus.map((m) => (
                <Link key={m.name} href={m.path}>
                  <a tabIndex={1} data-text={m.name}>
                    {m.name}
                  </a>
                </Link>
              ))}
            </li>
          </ul>
          <div
            id="hamburger"
            onClick={handleClicked}
            className={
              clicked ? TagName.HAMBURGER_OPEN : TagName.HAMBURGER_CLOSE
            }
          >
            <div>
              <div className="hamburger_lines"></div>
            </div>
          </div>
        </header>
      </div>
      <ul className={clicked ? TagName.MOBILE_OPEN : TagName.MOBILE_CLOSE}>
        <li className="mobile-menus">
          {menus.map((m) => (
            <Link href={m.path} key={m.name}>
              <a onClick={handleClicked} data-text={m.name}>
                {m.name}
              </a>
            </Link>
          ))}

          {/* <Link to="/login" key="login" id="signin" onClick={handleClicked}>
            Sign In
          </Link>
          <Link to="/signup" key="signup" id="signup" onClick={handleClicked}>
            Sign Up
          </Link> */}
        </li>
        <li className="social">
          <li>
            <SocialWidget />
          </li>
          <li className="copyright">
            <p>Copyright &copy;2022 gogixer.com</p>
            <p>Made by Santosh [superssingh@gmail.com]</p>
          </li>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
