import Box from "@mui/material/Box";
function BoardContent() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
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
