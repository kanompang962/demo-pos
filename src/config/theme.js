import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

let theme = createTheme();

theme = createTheme(theme, {
    palette: {
        primary: {
            main: '#ffcb00',
            light: '',
            dark: '#fff',
        },
        secondary: {
            main: '#E67E22',
        },
        success: {
            main: green[500],
            light: green[50],
            dark: green[900],
        },
    },
})

export default theme