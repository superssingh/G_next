import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/legacy/image'
import { motion } from 'framer-motion'
import { TagName, BrandName, Logo, SocialWidget } from '..'

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(TagName.menus[0].name)
  const [clicked, setClicked] = useState(false)

  const handleClicked = () => {
    setClicked(!clicked)
  }

  return (
    <>
      <div className="w-full h-fit z-10 top-0 sticky backdrop-blur-md">
        <div>
          <header className="flex py-3 place-items-center ">
            <Link
              href="/"
              legacyBehavior
              className="grid w-28"
            >
              <div className="relative mx-4 overflow-hidden transition-all duration-700 hover:hue-rotate-180">
                <Image
                  src={BrandName}
                  alt={TagName.COMPANY_NAME}
                  width={260}
                  height={60}
                  priority
                  className="brandLogo w-fit h-fit"
                  onClick={() => {
                    setClicked(false)
                  }}
                />
              </div>
            </Link>

            <ul className="grid w-full place-items-end px-4">
              <div className="flex space-x-1 place-items-center menuMotion">
                {TagName.menus.map((tab) => (
                  <Link
                    key={tab.name}
                    href={tab.path}
                    onClick={() => setActiveTab(tab.name)}
                    className={`${
                      activeTab === tab.name ? '' : 'hover:text-white/70'
                    }  relative rounded-full p-3 text-sm font-medium text-white outline-slate-100 transition focus-visible:outline-2 `}
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    {activeTab === tab.name && (
                      <motion.div
                        layoutId="bubble"
                        className="absolute py-2 inset-0 z-10 mix-blend-difference RedGradient fancyRadius1 shadow-md shadow-black hover:animate-pulse "
                        transition={{
                          type: 'spring',
                          bounce: 0.3,
                          duration: 0.7,
                        }}
                      />
                    )}
                    {tab.name == 'Home' ? tab.icon : tab.name}
                  </Link>
                ))}
              </div>
              <div
                id="hamburger"
                onClick={handleClicked}
                className={`${
                  clicked ? TagName.HAMBURGER_OPEN : TagName.HAMBURGER_CLOSE
                } z-30 `}
              >
                <div>
                  <div className="hamburger_lines"></div>
                </div>
              </div>
            </ul>
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
                  className="mobileMenu relative z-10 my-2 flex w-full rounded-full py-2 px-4 text-white shadow-black transition-all duration-300 hover:bg-teal-600 hover:shadow-lg"
                >
                  {m.icon}
                  <div className="w-full pl-4 text-base ">{m.name}</div>
                </div>
              </Link>
            ))}

            <li className="social z-10">
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
                    priority
                    onClick={handleClicked}
                  />
                </div>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  )
}

export default Navbar
