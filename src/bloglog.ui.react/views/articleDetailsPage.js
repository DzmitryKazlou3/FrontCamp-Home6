import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme as customTheme } from './theme';

import ArticleDetail from '../components/articleDetail.js';
import Comments from '../components/comments.js';
import NewComment from '../components/newComment.js';


export default class ArticleDetailsPage extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		
		let myArticle = JSON.stringify(this.props.user_id) == JSON.stringify(this.props.article.user.user_id);
		
		return (

			<MuiThemeProvider muiTheme={customTheme}>
				<div>
                    <div className="toolBar">
						<RaisedButton label="Home" href="/react" />
						<RaisedButton label="Articles" href="/react/articles" />
						
						{myArticle
						&& <RaisedButton label="Edit article" href={"/react/articles/" + this.props.article.id + "/edit"}/>}
				    </div>

					<ArticleDetail article={this.props.article} />
					<Comments comments={this.props.comments} />
					<div className="newcomment-container">
						<NewComment article_id={this.props.article.id} token={this.props.token}/>
					</div>
				</div>
			</MuiThemeProvider>

		)
	};
}