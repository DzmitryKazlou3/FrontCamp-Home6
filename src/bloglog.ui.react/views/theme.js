import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepOrange500 } from 'material-ui/styles/colors';

export const muiTheme = getMuiTheme(
    {
        palette: {
            primary1Color: deepOrange500
        },
    }, {
        avatar: {
            borderColor: null,
        },
        userAgent: 'all'
    });