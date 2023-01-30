'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { TagName, BrandName, Logo, SocialWidget } from '..';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = async () => {
    setClicked(!clicked);
  };

  return (
    <div className="Navigation  ">
      <div>
        <header className="Navbar ">
          <Link
            href="/"
            legacyBehavior
            className="grid w-28"
          >
            <div className="relative mx-4 overflow-hidden transition-all duration-700 hover:hue-rotate-180">
              <Image
                src={BrandName}
                alt={TagName.COMPANY_NAME}
                priority
                width={200}
                height={45}
                className="brandLogo"
                onClick={async () => {
                  if (clicked) {
                    await setClicked(false);
                  }
                }}
              />
            </div>
          </Link>

          <ul className={TagName.MENU_DEFAULT}>
            <li>
              <div
                className="relative grid rounded px-2 "
                tabIndex={1}
              >
                <Link
                  key={TagName.HomeMenu.name}
                  href={TagName.HomeMenu.path}
                  legacyBehavior
                >
                  <div className="randomBG1 relative grid rounded-full p-2 shadow-xl shadow-black hover:animate-pulse hover:bg-black/50 ">
                    {TagName.HomeMenu.icon}
                  </div>
                </Link>
              </div>
            </li>

            <li>
              {TagName.menus.map((m) => (
                <Link
                  href={m.path}
                  key={m.name}
                  tabIndex={1}
                  data-text={m.name}
                  className="menu font-bold"
                  legacyBehavior
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
        <div className="mobile-menus z-[5] px-4 py-2  ">
          {TagName.menus.map((m) => (
            <Link
              href={m.path}
              key={m.name}
              data-text={m.name}
              legacyBehavior
            >
              <div
                onClick={handleClicked}
                className="mobileMenu relative z-10 my-2 flex w-full rounded-md py-2 px-4 text-white shadow-black transition-all duration-300 hover:bg-teal-600 hover:shadow-lg"
              >
                {m.icon}
                <div className="w-full pl-4 text-base ">{m.name}</div>
              </div>
            </Link>
          ))}

          <li className="social z-[10]">
            <SocialWidget social={TagName.socialLinks} />
          </li>

          <li className="navLogo z-10">
            <Link
              href="/"
              legacyBehavior
            >
              <div className="grid place-content-center">
                <Image
                  src={Logo}
                  alt={TagName.COMPANY_NAME}
                  width={80}
                  height={80}
                  placeholder="blur"
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
