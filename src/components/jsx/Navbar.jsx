import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { TagName, BrandName, Logo, SocialWidget } from "../";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <div className="Navigation">
      <div>
        <header className="Navbar border-b border-slate-500/[.0] ">
          <a className="w-48 center-center mx-8" href="/">
            <Image src={BrandName} alt={TagName.COMPANY_NAME} priority />
          </a>

          <ul className={TagName.MENU_DEFAULT}>
            <li>
              {TagName.menus.map((m) => (
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
      <ul
        className={clicked ? TagName.MOBILE_OPEN : TagName.MOBILE_CLOSE}
        onClick={handleClicked}
      >
        <li className="mobile-menus z-[5] ">
          {TagName.menus.map((m) => (
            <Link href={m.path} key={m.name}>
              <a
                onClick={handleClicked}
                data-text={m.name}
                className="hoverEffect z-10"
              >
                <div className="icon w-auto " width={24} height={24}>
                  {m.icon}
                </div>
                <div className="menuname w-fit">{m.name}</div>
              </a>
            </Link>
          ))}

          {/* <Link to="/login" key="login" id="signin" onClick={handleClicked}>
            Sign In
          </Link>
          <Link to="/signup" key="signup" id="signup" onClick={handleClicked}>
            Sign Up
          </Link> */}

          <li className="social z-[10]">
            <SocialWidget />
          </li>

          <li className="navLogo z-10">
            <Link href="/">
              <Image
                src={Logo}
                alt={TagName.COMPANY_NAME}
                width={80}
                height={80}
                onClick={handleClicked}
              />
            </Link>
          </li>
          <div className="absolute z-[0] w-[100%] h-[100%] bottom-0 purple_gradient" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
