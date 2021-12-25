import { createTheme } from "@mui/material/styles";

const globalTheme = createTheme({
  typography: {
    fontFamily: "monospace",
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        contained: {
          // Some CSS

          background: "red!important",
        },
      },
    },
  },
});

export default globalTheme;
