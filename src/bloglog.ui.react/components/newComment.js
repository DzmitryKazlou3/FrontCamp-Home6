import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



export default class NewComment extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: {
				text: ''
			},
			comment: {
				text: ''
			}
		};

        this.styles = {
            chip: {
                margin: 4,
            },
            wrapper: {
                display: 'flex',
                flexWrap: 'wrap',
            },
        };
		
		this.add = this.add.bind(this);
		this.onChangeText = this.onChangeText.bind(this);
	}

	onChangeText(event){
        this.state.comment.text = event.target.value;
		this.setState(this.state.comment);
	}

	add(event){

        // prevent default action. in this case, action is the form submission event
        event.preventDefault();

        let comment = {
            text: this.state.comment.text
        };
        
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/articles/' + this.props.article_id + '/comments/add');
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.setRequestHeader('Authorization', this.props.token);
        xhr.responseType = 'json';

        xhr.addEventListener('load', () => {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log(xhr.response);
                            if(xhr.response.success){
                                                            
                            window.location.href = window.location.href;
                            } else{
                                alert(xhr.response.message);
                            }
            }
        });

		xhr.send(JSON.stringify(comment));
	}

	render() {

		return (
			<div>
				<form action="" onSubmit={this.add}>
          
					<div>			
					    <TextField
                            id="newComemnt-text"
                            floatingLabelText="Your Comment"
                            onChange={this.onChangeText}
                            errorText={this.state.errors.text}
                            value={this.state.comment.text}
                            multiLine={true}
                            fullWidth={true}
                            rows={4}
                            rowsMax={8}
                            />
				    </div>

                    <div>
                        <RaisedButton label="Add Comment" type="submit"/>
                    </div>

			  </form>
			</div>
		)
	}
}