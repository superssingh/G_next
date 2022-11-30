import React from "react";
import _ from "lodash"

const Pagination = ({ itemCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemCount / pageSize);

  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  const handleChange = async (value) => {
    await onPageChange(value);
  };

  return (
    <nav aria-label="Pagination">
      <nav className="bg-slate-200/10 p-4 place-content-center grid rounded-md">
        <ul className="inline-flex items-center align-middle -space-x-px">
          <li>
            <span
              className={
                `${currentPage > 1 ? " " : "cursor-not-allowed "}` +
                "block py-2 px-3 ml-0 mr-2 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
              }
              onClick={async () => {
                if (currentPage > 1) {
                  handleChange(parseInt(currentPage) - 1);
                  return;
                }
              }}
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </li>
          {pages.map((p, i) => {
            return (
              <li key={i}>
                <span
                  className={
                    p == currentPage ? " activeButton" : " paginationButton"
                  }
                  onClick={async () => {
                    handleChange(p);
                    return;
                  }}
                >
                  {p}
                </span>
              </li>
            );
          })}

          <li>
            <div
              className={
                `${pages.length > currentPage ? "" : "cursor-not-allowed "}` +
                "block py-2 px-3 ml-2 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              }
              onClick={async () => {
                if (pages.length > currentPage) {
                  handleChange(currentPage + 1);
                  return;
                }
              }}
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </li>
        </ul>
      </nav>

    </nav>
  );
};

export default Pagination;
