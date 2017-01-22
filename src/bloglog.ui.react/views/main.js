import React from 'react';

import Login from '../components/login.js';
import { logOut } from '../services/auth.service.js';

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
            <MuiThemeProvider muiTheme={customTheme}>
                <div>
                    
                        <div className="toolBar">
                            <RaisedButton label="Articles" href="/react/articles" />
                            {this.props.isAuth &&
                                <RaisedButton label="Log Out"onClick={logOut}/>}                                
                            {!this.props.isAuth &&
                                <RaisedButton label="Sign Up" href="/react/signup"/>}
                        </div>
                    
                        <div>
                            <Login isAuth={this.props.isAuth}/>
                        </div>
                </div>
            </MuiThemeProvider>
		)
	};
}