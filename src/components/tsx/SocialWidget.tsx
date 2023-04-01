import Link from 'next/link'
import { ReactNode } from 'react'

type SocialLink = {
  name: string
  url: string
  icon: ReactNode
}

type SocialWidgetProps = {
  social: SocialLink[]
}

const SocialWidget = ({ social }: SocialWidgetProps) => {
  return (
    <div className="flex showSlow z-2  my-2 place-content-center">
      {social &&
        social.map(({ name, url, icon }) => {
          return (
            <Link
              href={url}
              key={name}
              passHref
            >
              <div className={name}>{icon}</div>
            </Link>
          )
        })}
    </div>
  )
}

export default SocialWidget
