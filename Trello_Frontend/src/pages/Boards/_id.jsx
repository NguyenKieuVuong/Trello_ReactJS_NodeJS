//Board Details chi tiết của page nay loc theo id
import Container from "@mui/material/Container";
import AppBar from "../../components/AppBar";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";
function Board() {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
        <AppBar />
        <BoardBar />
        <BoardContent />
      </Container>

      
      <h1>Vite + React</h1>
      <div className="card">
       
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Board;
