import React from "react";
import "./styles.css";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Container from "./views/Container/Container";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <h2>To Do Activities</h2>
        <Container />
      </div>
    </ThemeProvider>
  );
}
