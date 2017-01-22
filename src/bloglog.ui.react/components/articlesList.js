import React from 'react';
import { List, ListItem } from 'material-ui/List';



export default class ArticlesList extends React.Component {
	constructor(props) {
		super(props);
	}

	selectArticle(id){
		window.location.href = window.location.href + '/' + id;
	}

	render() {

		return (
			<List>
				{this.props.articles.map((article, i) =>
					<ListItem
					    key={i}
						primaryText={article.title}
						secondaryText={article.description}
						onTouchTap={this.selectArticle.bind(this, article.id)}/>
				)}
			</List>
		)
	}
}