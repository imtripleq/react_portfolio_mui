import { createTheme } from "@mui/material/styles";

const globalTheme = createTheme({
  typography: {
    fontFamily: "Ropa Sans",
    h3: {
      [`@media (max-width: 480px)`]: { fontSize: "2rem" },
    },
    h1: { [`@media (max-width: 480px)`]: { fontSize: "3rem" } },
    h2: { [`@media (max-width: 480px)`]: { fontSize: "1.5rem" } },
    h6: { [`@media (max-width: 480px)`]: { fontSize: "15px" } },
    h5: {
      fontFamily: "VT323!important",
      [`@media (max-width: 480px)`]: { fontSize: "23px" },
    },
    body2: { [`@media (max-width: 480px)`]: { fontSize: "8px" } },
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
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  },
});

export default globalTheme;
