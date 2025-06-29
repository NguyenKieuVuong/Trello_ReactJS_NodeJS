import React from "react";
import Box from "@mui/material/Box";
function BoardBar() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          with: "100%",
          height: (theme) => theme.trello.boardBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        Board Bar
      </Box>
    </>
  );
}

export default BoardBar;
