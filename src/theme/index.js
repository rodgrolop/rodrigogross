import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: grey[500],
      main: grey[900],
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#b71c1c",
      contrastText: "#fff",
    },
    textPrimary: grey,
    textSecondary: "#fff",
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
