import * as React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MenuItem } from './MenuItem'
import { menus } from '~/components/js/constants'
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Navigation = () => (
  <motion.ul variants={variants}>
    {menus.map((i) => (
      <Link
        href={i.path}
        key={i.name}
        data-text={i.name}
        legacyBehavior
      >
        <div className="w-[200px]  ">
          <MenuItem
            i={i}
            key={i}
          />
        </div>
      </Link>
    ))}
  </motion.ul>
)

const itemIds = [0, 1, 2, 3, 4]
