import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TagName, SocialWidget, Logo } from "../index";

const Footer = () => {
  return (
    <div className="flex z-[3] flex-col w-full h-fit bottom-0 transition-all duration-700 p-4 bg-gray-900 text-gray-300 ">
      <div className="grid w-full h-fit place-items-center top-0 px-2 md:grid-cols-3 ">
        <div className="grid grid-cols-2 w-full p-4 place-items-start md:place-items-start">
          {TagName.footermenus.map((m) => (
            <Link key={m.name} href={m.path}>
              <a
                tabIndex={1}
                data-text={m.name}
                className="underLine relative w-fit text-xs p-[5px]  transition-all duration-300"
              >
                {m.name}
              </a>
            </Link>
          ))}
        </div>
        <div className=" top-0 w-fit animate-pulse">
          <Link href="/">
            <div>
              <Image
                src={Logo}
                alt={TagName.COMPANY_NAME}
                width={100}
                height={100}
                className="logo"
              />
            </div>
          </Link>
        </div>
        <div className="footerSocial top-0 w-fit place-items-start ">
          <SocialWidget social={TagName.socialLinks} />
        </div>
      </div>
      <div className="grid place-items-center text-gray-300">
        <div className="flex flex-auto place-items-center">
          <span className="text-sm">&copy;</span>
          <span className="text-xs ">
            2022 Gogixer.com | All right reserved.
          </span>
        </div>
        {/* <div>Made by Santosh Singh [superssingh@gmail.com]</div> */}
      </div>
    </div>
  );
};

export default Footer;
