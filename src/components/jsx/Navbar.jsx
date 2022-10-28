import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TagName, BrandName, Logo, SocialWidget } from "..";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = async () => {
    setClicked(!clicked);
  };

  return (
    <div className="Navigation">
      <div>
        <header className="Navbar border-b border-slate-500/[.0] ">
          <Link
            className="w-48 center-center mx-8 hover:hue-rotate-180 transition-all duration-700"
            href="/"
          >
            <Image src={BrandName} alt={TagName.COMPANY_NAME} priority />
          </Link>

          <ul className={TagName.MENU_DEFAULT}>
            <li>
              <Link
                key={TagName.HomeMenu.name}
                href={TagName.HomeMenu.path}
                legacyBehavior
              >
                <div
                  className=" relative hoverEffect p-2 mx-2 rounded"
                  tabIndex={1}
                >
                  {TagName.HomeMenu.icon}
                </div>
              </Link>
            </li>
            <li>
              {TagName.menus.map((m) => (
                <Link
                  key={m.name}
                  href={m.path}
                  div
                  tabIndex={1}
                  data-text={m.name}
                  className="menu"
                >
                  {m.name}
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
        <div className="mobile-menus z-[5] p-4">
          {TagName.menus.map((m) => (
            <Link href={m.path} key={m.name}>
              <div
                onClick={handleClicked}
                data-text={m.name}
                className="flex z-10 transition-all duration-300 rounded-md hover:bg-teal-500 font-medium  hover:shadow-md hover:shadow-black p-4"
              >
                <div className="icon w-auto ">{m.icon}</div>
                <div className=" w-full text-md">{m.name}</div>
              </div>
            </Link>
          ))}

          <li className="social z-[10]">
            <SocialWidget social={TagName.socialLinks} />
          </li>

          <li className="navLogo z-10">
            <Link href="/">
              <div className="grid place-content-center">
                <Image
                  src={Logo}
                  alt={TagName.COMPANY_NAME}
                  width={80}
                  height={80}
                  onClick={handleClicked}
                />
              </div>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
