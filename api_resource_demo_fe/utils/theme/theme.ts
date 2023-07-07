import { pink } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
    palette: {
        primary: {
            main: '#F37321',
            contrastText: '#FFFFFF'
        },
        secondary: pink,
        text: {
            primary: '#242424',
            secondary: '#667080',
        },
        divider: '#000000',
        background: {
            default: '#F6EEE3',
            paper: '#F6EEE3'

        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true
            }
        }
    }
});