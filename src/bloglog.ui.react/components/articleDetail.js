import React from 'react';



export default class ArticleDetail extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div>
				<div>{this.props.article.title}</div>
				<div>{this.props.article.tags}</div>
				<div>{this.props.article.text}</div>
			</div>
		)
	}
}