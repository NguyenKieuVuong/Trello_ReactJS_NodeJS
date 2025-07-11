import Box from "@mui/material/Box";
function BoardContent() {
  return (
    <>
      <Box
        sx={{
             bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
          with: "100%",
          // string literal javascript dung dau `` de gan bien
          height: (theme) =>
            `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
          display: "flex",
          alignItems: "center",
        }}
      >
        Board Content
      </Box>
    </>
  );
}

export default BoardContent;
