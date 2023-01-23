import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { bottom } from "@mui/system";

export default function PaginationRounded() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        textAlign: "center",
        right: "0",
        marginRight: "20px",
      }}
    >
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </div>
  );
}
