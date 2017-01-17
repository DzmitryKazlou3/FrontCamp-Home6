import React from 'react';

import Login from '../components/login.js';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import { deepOrange500 } from 'material-ui/styles/colors';
import {muiTheme as customTheme} from './theme';

export default class Main extends React.Component {
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
                        <Login isAuth={this.props.isAuth}/>
                        {!this.props.isAuth &&
                            <RaisedButton label="Sign Up" onClick={this.signup}/>}
                    </div>
                </MuiThemeProvider>
            </div>
		)
	};
}