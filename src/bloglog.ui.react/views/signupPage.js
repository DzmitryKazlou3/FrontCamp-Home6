import React from 'react';

import SignUp from '../components/signup.js';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import { deepOrange500 } from 'material-ui/styles/colors';
import {muiTheme as customTheme} from './theme';

export default class SignUpPage extends React.Component {
	constructor(props) {
		super(props);

        // This binding is necessary to make `this` work in the callback
        this.signup = this.signup.bind(this);
	};
    
    signup = () => {

        console.log("signup");
        alert('left');
    };

	render() {
		return (
            <div>
                <MuiThemeProvider muiTheme={customTheme}>
                    <div>
                        <SignUp />
                        <RaisedButton label="Back to Main" href="/react"/>
                    </div>
                </MuiThemeProvider>
            </div>
		)
	};
}