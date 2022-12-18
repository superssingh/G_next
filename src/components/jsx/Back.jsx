import Link from "next/link";
const Back = ({ path = "/" }) => {
  return (
    <Link href={path} legacyBehavior>
      <div id="backButton" className=" top-0 w-fit h-fit animate-pulse mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#000000"
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
