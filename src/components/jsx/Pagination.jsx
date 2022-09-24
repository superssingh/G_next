import React from "react";
import _ from "lodash";
import Pagination from "@mui/material/Pagination";

import Stack from "@mui/material/Stack";

const PaginationBar = ({ itemCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  const handleChange = async (event, value) => {
    event.preventDefault();
    onPageChange(value);
  };

  return (
    <nav className="PaginationBar bg-slate-200 p-2 place-content-center grid rounded-md">
      <Stack spacing={2}>
        <Pagination
          count={pages.length}
          defaultPage={currentPage}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          color="secondary"
        />
      </Stack>
    </nav>
  );
};

export default PaginationBar;
