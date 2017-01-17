import React from 'react';
import { List, ListItem } from 'material-ui/List';



export default class ArticlesList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<List>
				{this.props.articles.map((article, i) =>
					<ListItem
					    key={i}
						primaryText={article.title}
						secondaryText={article.description} />
				)}
			</List>
		)
	}
}