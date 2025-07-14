import { createTheme } from "@mui/material/styles";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { deepOrange, orange, teal, cyan } from "@mui/material/colors";
import { BorderColor, BorderStyle } from "@mui/icons-material";

// Create a theme instance.
const App_Bar_Height = "58px";
const board_Bar_Height = "60px";
const board_Content_Height = `calc(100vh - ${App_Bar_Height} - ${board_Bar_Height})`;
const theme = extendTheme({
  trello: {
    appBarHeight: App_Bar_Height,
    boardBarHeight: board_Bar_Height,
    boardContentHeight: board_Content_Height,
  },
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: teal,
    //     secondary: deepOrange,
    //   },
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange,
    //   },
    // },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "*::-webkit-scrollbar-thumb": {
            background: "#dcdde1",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            background: "#fff",
            borderRadius: "8px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderWidth: "0.5px",
          "&:hover": {
            borderWidth: "1px",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiTypography-body1": {
            fontSize: "0.875rem",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",

          "& fieldset": {
            borderWidth: "0.5px !important",
          },
          "&:hover fieldset": {
            borderWidth: "1px !important",
          },
          "&.Mui-focused fieldset": {
            borderWidth: "1px !important",
          },
        },
      },
    },
  },
});

export default theme;
