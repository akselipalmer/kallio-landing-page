import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { Box } from "@mui/system";
import "./App.css";
import BasicCard from "./components/Card";
import DrawerAppBar from "./components/Header";

function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const handleChangeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme}>
      <DrawerAppBar changeMode={handleChangeMode} />
    </ThemeProvider>
  );
}

export default App;
