'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Back = ({ path = '/' }) => {
  // const router = useRouter()
  return (
    <>
      {/* <button
        type="button"
        onClick={() => router.back()}
        id="backButton"
        className="randomBG1 absolute top-0 mt-[-1.5rem] grid h-10 w-10 rounded-full p-2 ml-2 md:h-12 md:w-12 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=""
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button> */}

      <Link
        href={path}
        passHref
        legacyBehavior
      >
        <div
          id="backButton"
          className="randomBG1 absolute top-0 mt-[-1.5rem] grid h-10 w-10 rounded-full p-2 ml-2 md:h-12 md:w-12  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=""
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </div>
      </Link>
    </>
  )
}

export default Back
