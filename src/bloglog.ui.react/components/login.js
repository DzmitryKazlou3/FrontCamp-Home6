import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Auth extends React.Component {
	constructor(props) {
		super(props);
	}

	login(){
		alert(login);
	}

	render() {
		return (
			
				<form action="" onSubmit={this.handleSubmit}>
				  <div>				
					<MuiThemeProvider>
						<TextField
							floatingLabelText="login"
							errorText=""
							/>
					</MuiThemeProvider>
				  </div>
                  
				  <div>
					<MuiThemeProvider>
						<TextField
							floatingLabelText="Password"
							errorText=""
							/>
					</MuiThemeProvider>
				  </div>

                  <div>
					<MuiThemeProvider>
						<RaisedButton label="Sign In" type="submit" onClick="login()"/>
					</MuiThemeProvider>
				  </div>

				</form>
		)
	}
}