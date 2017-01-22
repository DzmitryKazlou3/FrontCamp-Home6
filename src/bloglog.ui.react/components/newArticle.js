import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';



export default class NewArticle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: {
				title: '',
				text: '',
                description: '',
				tags: ''
			},
			article: {
				title: '',
				text: '',
                description: '',
				tags: [
                    {
                        key: 0,
                        value: 'tag1'
                    },
                    {
                        key: 1,
                        value: 'tag2'
                    },
                    {
                        key: 2,
                        value: 'tag3'
                    }
                ]
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

	add(event){
            // prevent default action. in this case, action is the form submission event
        event.preventDefault();
        let article = {
            title: this.state.article.title,
            text: this.state.article.text,
            description: this.state.article.description,
            tags: []
        };
        
        Array.forEach(this.state.article.tags, tag => {article.tags.push(tag.value)});

        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/articles');
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.setRequestHeader('Authorization', this.props.token);
        xhr.responseType = 'json';

        xhr.addEventListener('load', () => {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log(xhr.response);
                            if(xhr.response.success){
                                                            
                            window.location.href = '/react/articles';
                            } else{
                                alert(xhr.response.message);
                            }
            }
        });

		xhr.send(JSON.stringify(article));
	}

    handleRequestDelete = (key) => {
        if (key === 3) {
            alert('Why would you want to delete React?! :)');
            return;
        }

        this.chipData = this.state.article.tags;
        const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
        this.chipData.splice(chipToDelete, 1);
        this.setState(this.state.article);
    };

    renderChip(data) {
        return (
            <Chip
                key={data.key}
                onRequestDelete={() => this.handleRequestDelete(data.key)}
                style={this.styles.chip}>
                {data.value}
            </Chip>
        );
    }

	render() {

		return (
			<div>
				<form action="" onSubmit={this.add}>
                
                    <div className="toolBar">
                         <RaisedButton label="Back" href='/react/articles' />
                         <RaisedButton label="Create" type="submit"/>
                    </div>

					<div>			
					    <TextField
                            id="newArticle-title"
                                floatingLabelText="Title"
                                onChange={this.onChangeTitle}
                                errorText={this.state.errors.title}
                                value={this.state.article.title}
                                />
				    </div>

                    <div style={this.styles.wrapper}>
                        {this.state.article.tags.map(this.renderChip, this)}
                    </div>

                    <div>			
                       <TextField
                            id="newArticle-description"
                                floatingLabelText="Description"
                                onChange={this.onChangeDescription}
                                errorText={this.state.errors.description}
                                value={this.state.article.description}
                                />
                    </div>
					
                    <div>
                       <TextField
                            id="newArticle-text"
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