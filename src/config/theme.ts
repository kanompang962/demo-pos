import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

let theme = createTheme();

theme = createTheme(theme, {
    palette: {
        primary: {
            main: '#61677A',
            light: '#D8D9DA',
            dark: '#272829',
        },
        secondary: {
            main: '#FFF6E0',
        },
        success: {
            main: green[500],
            light: green[50],
            dark: green[900],
        },
    },
})

export default theme