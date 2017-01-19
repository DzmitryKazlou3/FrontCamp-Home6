import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme as customTheme } from './theme';

import ArticleDetail from '../components/articleDetail.js';
import Comments from '../components/comments.js';


export default class ArticleDetailsPage extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		return (

			<MuiThemeProvider muiTheme={customTheme}>
				<div>
					<ArticleDetail article={this.props.article} />
					<Comments comments={this.props.comments} />
				</div>
			</MuiThemeProvider>

		)
	};
}