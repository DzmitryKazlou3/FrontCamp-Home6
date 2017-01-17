import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import cookie from 'react-cookie';



export default class Auth extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: {
				email: '',
				password: ''
			},
			user: {
				email: '',
				password: ''
			}
		};
		
		this.login = this.login.bind(this);
		this.logOut = this.logOut.bind(this);
		this.onChangeMail = this.onChangeMail.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
	}

	onChangeMail(event){
    this.state.user.email = event.target.value;
		this.setState(this.state.user);
	}

	onChangePassword(event){		
    this.state.user.password = event.target.value;
		this.setState(this.state.user);
	}

	login(event){
		// prevent default action. in this case, action is the form submission event
    event.preventDefault();

		let xhr = new XMLHttpRequest();
		xhr.open('POST', '/login/');
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.responseType = 'json';

    xhr.addEventListener('load', () => {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(xhr.response);
						if(xhr.response.success){
							cookie.save("Id", xhr.response.data.id);
							cookie.save("Token.JWT", xhr.response.data.token);

							
				      window.location.href = window.location.href;
						} else{
							alert(xhr.response.message);
						}
        }
		});

		xhr.send(JSON.stringify(this.state.user));
	}

	logOut(event) {
		cookie.remove("Id");
		cookie.remove("Token.JWT");
		window.location.href = window.location.href;
	}

	render() {

		return (
			<div>
			{ !this.props.isAuth ? (
				<form action="" onSubmit={this.login}>
				  <div>			
						<TextField
						  id="loginForm-login"
							floatingLabelText="Email"
							onChange={this.onChangeMail}
							errorText={this.state.errors.email}
							value={this.state.user.email}
							/>
				  </div>
                  
				  <div>
						<TextField
						  id="loginForm-password"
							type="password"
							floatingLabelText="Password"
							onChange={this.onChangePassword}
							errorText={this.state.errors.password}
							value={this.state.user.password}
							/>
				  </div>

          <div>
						<RaisedButton label="Sign In" type="submit"/>
				  </div>

			</form>
			) : (
          <div>
						<RaisedButton label="Log Out"onClick={this.logOut}/>
				  </div>
			)}
			</div>
		)
	}
}