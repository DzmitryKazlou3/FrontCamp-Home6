import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {muiTheme as customTheme} from './theme';

import ArticlesList from '../components/articlesList.js';


export default class ArticlesPage extends React.Component {
	constructor(props) {
		super(props);
	};
    
	render() {        
		return (
            <div>
                <MuiThemeProvider muiTheme={customTheme}>
                    <ArticlesList articles={this.props.dataContext.data}/>
                </MuiThemeProvider>

                <div>Total items count {this.props.dataContext.count}</div>                
            </div>
		)
	};
}