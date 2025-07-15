import React from "react";
import Card from "./Card/Card";

import Box from "@mui/material/Box";
function ListCards() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: "0 5px",
        m: "0 5px",
        gap: 1,
        overflowX: "hidden",
        overflowY: "auto",
        maxHeight: (theme) =>
          `calc( 
              ${theme.trello.boardContentHeight} - 
              ${theme.spacing(5)} - 
              ${theme.trello.columnHeaderHeight} - 
              ${theme.trello.columnFooterHeight})`,
        "&::-webkit-scrollbar-thumb": {
          background: "#ced0da",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#bfc2cf",
        },
      }}
    >
      <Card />
    </Box>
  );
}

export default ListCards;
