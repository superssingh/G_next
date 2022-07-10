import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TagName, SocialWidget, Logo } from "../";

const Footer = () => {
  return (
    <div className="flex flex-col w-full h-fit bottom-0 transition-all duration-700 p-4 bg-gray-900 text-gray-300 ">
      <div className="grid w-full h-fit place-items-center top-0 px-2 md:grid-cols-3 ">
        <div className="grid grid-cols-2 w-full p-4 place-items-start md:place-items-start">
          {TagName.footermenus.map((m) => (
            <Link key={m.name} href={m.path}>
              <a
                tabIndex={1}
                data-text={m.name}
                className="underLine relative w-fit text-sm py-1 mx-1 transition-all duration-300"
              >
                {m.name}
              </a>
            </Link>
          ))}
        </div>
        <div className=" top-0 w-fit">
          <Link href="/">
            <Image
              src={Logo}
              alt={TagName.COMPANY_NAME}
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="footerSocial top-0 w-fit place-items-start ">
          <SocialWidget />
        </div>
      </div>
      <div className="grid place-items-center  text-sm mt-6 text-gray-300">
        <div> &copy;2022 Gogixer.com | All right reserved.</div>
        <div>Made by Santosh Singh [superssingh@gmail.com]</div>
      </div>
    </div>
  );
};

export default Footer;
