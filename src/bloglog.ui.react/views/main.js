import React from 'react';

import Login from '../components/login.js';

import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class Main extends React.Component {
	constructor(props) {
		super(props);

        // This binding is necessary to make `this` work in the callback
        this.signup = this.signup.bind(this);
	};
    
    signup = () => {

        console.log("signup");
        debugger;
        alert.bind(window, 'left');
    };

	render() {

        const muiTheme = getMuiTheme({
        palette: {
            primary1Color: deepOrange500
        },
        }, {
        avatar: {
            borderColor: null,
        },
        userAgent: 'all',
        });

		return (
            <div>
                <MuiThemeProvider  muiTheme={muiTheme}>
                    <RaisedButton label="Sign Up" onClick={this.signup}/>
                </MuiThemeProvider>
                <button onClick={function() {alert("left")}}>asdasd</button>
            </div>
		)
	};
}