import Box from "@mui/material/Box";
import * as React from "react";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sorts";
function BoardContent({ board }) {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, "_id");
  return (
    <>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
          with: "100%",
          // string literal javascript dung dau `` de gan variable
          height: (theme) => theme.trello.boardContentHeight,
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          p: "10px 0",
        }}
      >
        <ListColumns columns={orderedColumns} />
      </Box>
    </>
  );
}

export default BoardContent;
