import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import { Box } from "@mui/system";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: "#1111",
        height: "100vh",
        marginTop: "-15px",
        marginBottom: "-12px",
      }}
    >
      <Header />
      <Home />
    </Box>
  );
}

export default App;
