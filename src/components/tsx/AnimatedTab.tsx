import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { TagName } from '..'

function AnimatedTab() {
  const [activeTab, setActiveTab] = useState(TagName.menus[0].name)

  return (
    <div className="flex space-x-1 place-items-center menuMotion">
      <Link
        key={TagName.HomeMenu.name}
        href={TagName.HomeMenu.path}
      >
        <div className="grid rounded-full p-3 mx-4 randomGreen shadow-xl shadow-black/80 transition-shadow duration-700 hover:shadow-md hover:shadow-black ">
          {TagName.HomeMenu.icon}
        </div>
      </Link>

      {TagName.menus.map((tab) => (
        <Link
          key={tab.name}
          href={tab.path}
          onClick={() => setActiveTab(tab.name)}
          className={`${
            activeTab === tab.name ? '' : 'hover:text-white/60'
          } relative rounded-full  p-3 text-sm font-medium text-white outline-slate-100 transition focus-visible:outline-2 `}
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          {activeTab === tab.name && (
            <motion.div
              layoutId="bubble"
              className="absolute py-2 inset-0 z-10 mix-blend-difference RedGradient fancyRadius shadow-md shadow-black hover:animate-pulse  "
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
  )
}
export default AnimatedTab
