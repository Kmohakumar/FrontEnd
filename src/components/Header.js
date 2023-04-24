import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Box sx={{ textAlign: "center", background: "#FFD801" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, fontWeight: "bold", fontSize: "2rem" }}
      >
        True Beacon
      </Typography>
    </Box>
  );
};

export default Header;
