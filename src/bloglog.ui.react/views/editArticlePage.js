import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {muiTheme as customTheme} from './theme';

import EditArticle from '../components/editArticle';


export default class EditArticlePage extends React.Component {
	constructor(props) {
		super(props);
	};
    
	render() {
		return (

            <div>
                <MuiThemeProvider muiTheme={customTheme}>
				    <div>
						<EditArticle token={this.props.dataContext.token} article={this.props.dataContext.article}/>
					</div>
                </MuiThemeProvider>
            </div>

		)
	};
}