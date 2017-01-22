import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';



export default class EditArticle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: {
				title: '',
				text: '',
                description: '',
				tags: ''
			},
			article: props.article
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
		
		this.edit = this.edit.bind(this);
		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeText = this.onChangeText.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
	}

	onChangeTitle(event){
        this.state.article.title = event.target.value;
		this.setState(this.state.article);
	}

	onChangeText(event){
        this.state.article.text = event.target.value;
		this.setState(this.state.article);
	}
    
	onChangeDescription(event){
        this.state.article.description = event.target.value;
		this.setState(this.state.article);
	}

	edit(event){
            // prevent default action. in this case, action is the form submission event
        event.preventDefault();
        let article = {
            id: this.state.article.id,
            title: this.state.article.title,
            text: this.state.article.text,
            description: this.state.article.description,
            tags: this.props.article.tags
        };
        
        let xhr = new XMLHttpRequest();
        xhr.open('PUT', '/api/articles/');
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.setRequestHeader('Authorization', this.props.token);
        xhr.responseType = 'json';

        xhr.addEventListener('load', () => {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log(xhr.response);
                    if(xhr.response.success){
                                                    
                    window.location.href = '/react/articles/' + this.state.article.id;
                    } else{
                        alert(xhr.response.message);
                    }
            }
        });

		xhr.send(JSON.stringify(article));
	}

	render() {

		return (
			<div>
				<form action="" onSubmit={this.edit}>
                    <div className="toolBar">
                         <RaisedButton label="Back" href={'/react/articles/' + this.state.article.id} />
                         <RaisedButton label="Apply changes" type="submit"/>
                    </div>

					<div>			
					    <TextField
                            id="editArticle-title"
                            fullWidth={true}
                            floatingLabelText="Title"
                            onChange={this.onChangeTitle}
                            errorText={this.state.errors.title}
                            value={this.state.article.title}
                            />
				    </div>

                    <div>			
                       <TextField
                            id="editArticle-description"
                            fullWidth={true}
                            floatingLabelText="Description"
                            onChange={this.onChangeDescription}
                            errorText={this.state.errors.description}
                            value={this.state.article.description}
                            />
                    </div>
					
                    <div>
                       <TextField
                            id="editArticle-text"
                            fullWidth={true}
                            floatingLabelText="Text"
                            onChange={this.onChangeText}
                            errorText={this.state.errors.text}
                            value={this.state.article.text}
                            />
                    </div>

			  </form>
			</div>
		)
	}
}