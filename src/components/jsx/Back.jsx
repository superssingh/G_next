import Link from "next/link";
const Back = ({ path = "/" }) => {
  return (
    <Link
      href={path}
      legacyBehavior
    >
      <div
        id="backButton"
        className="grid absolute w-10 h-10 md:w-12 md:h-12 p-2 md:p-3 rounded-full top-0 mt-[-12px] "
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
  );
}

export default Back;
