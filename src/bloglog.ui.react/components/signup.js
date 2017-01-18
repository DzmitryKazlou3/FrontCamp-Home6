import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import cookie from 'react-cookie';



export default class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: {
				name: '',
				email: '',
				password: ''
			},
			user: {
				name: '',
				email: '',
				password: ''
			}
		};
		
		this.signup = this.signup.bind(this);
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeMail = this.onChangeMail.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
	}

	onChangeName(event){
    this.state.user.name = event.target.value;
		this.setState(this.state.user);
	}

	onChangeMail(event){
    this.state.user.email = event.target.value;
		this.setState(this.state.user);
	}

	onChangePassword(event){
    this.state.user.password = event.target.value;
		this.setState(this.state.user);
	}

	signup(event){
		// prevent default action. in this case, action is the form submission event
    event.preventDefault();

		let xhr = new XMLHttpRequest();
		xhr.open('POST', '/signup');
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.responseType = 'json';

    xhr.addEventListener('load', () => {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(xhr.response);
						if(xhr.response.success){
														
				      window.location.href = '/react';
						} else{
							alert(xhr.response.message);
						}
        }
		});

		xhr.send(JSON.stringify(this.state.user));
	}

	render() {

		return (
			<div>
				<form action="" onSubmit={this.signup}>
          
					<div>			
						<TextField
						  id="signupForm-name"
							floatingLabelText="Name"
							onChange={this.onChangeName}
							errorText={this.state.errors.name}
							value={this.state.user.name}
							/>
				  </div>

				  <div>			
						<TextField
						  id="signupForm-login"
							floatingLabelText="Email"
							onChange={this.onChangeMail}
							errorText={this.state.errors.email}
							value={this.state.user.email}
							/>
				  </div>
					
				  <div>
						<TextField
						  id="signupForm-password"
							type="password"
							floatingLabelText="Password"
							onChange={this.onChangePassword}
							errorText={this.state.errors.password}
							value={this.state.user.password}
							/>
				  </div>

          <div>
						<RaisedButton label="Sign Un" type="submit"/>
				  </div>

			  </form>
			</div>
		)
	}
}