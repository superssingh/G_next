import Link from 'next/link'
import { ReactNode } from 'react'

type SocialWidgetProps = {
  social: {
    name: string
    url: string
    icon: ReactNode
  }[]
}

const SocialWidget = ({ social }: SocialWidgetProps) => {
  return (
    <>
      <div className="flex showSlow z-2  my-2 place-content-center">
        {social &&
          social.map(({ name, url, icon }) => {
            return (
              <Link
                href={url}
                key={name}
                passHref
                legacyBehavior
              >
                <div className={name}>{icon}</div>
              </Link>
            )
          })}
      </div>
    </>
  )
}

export default SocialWidget
