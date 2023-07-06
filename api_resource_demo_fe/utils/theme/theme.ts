import { pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
    palette: {
        primary: {
            main: "#F6EEE3",
            contrastText: "#242424"
        },
        secondary: pink,
        text: {
            primary: "#242424",
            secondary: "#667080",
        },
        divider: "#000000",
        background: {
            default: "#F6EEE3",
            paper: "#F6EEE3"

        }
    },
    components: {
        MuiAvatar: {
            defaultProps: {
                variant: "circular"
            },
            styleOverrides: {
                "root": {
                    width: "4vw",
                    height: "4vw"
                }
            }
        },
        MuiAvatarGroup: {
            defaultProps: {
                spacing: "small",
                variant : "circular",
            },
            styleOverrides : {
                root : {
                    position : "relative",
                    left : "0px"
                }
            }
        }
    }
});