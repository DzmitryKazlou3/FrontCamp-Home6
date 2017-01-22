import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan400 } from 'material-ui/styles/colors';

export const muiTheme = getMuiTheme(
    {
        palette: {
            primary1Color: cyan400
        },
    }, {
        avatar: {
            borderColor: null,
        },
        userAgent: 'all'
    });