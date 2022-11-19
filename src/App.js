import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, CssBaseline } from "@mui/material";

const customTheme = createTheme({
  typography: {
    fontFamily: "'Space Mono', 'Bellefair', 'Barlow Condensed', sans-serif",
  },
  palette: {
    primary: {
      main: "hsl(183, 100%, 15%)",
    },
    secondary: {
      main: "hsl(172, 67%, 45%)",
    },
  },
});

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Button variant="contained">Contained</Button>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
