import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
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
				    <div>
                        <ArticlesList articles={this.props.dataContext.data}/>
						{!this.props.isAuth &&
                            <RaisedButton label="Add article" href="/react/newarticle/"/>}
					</div>
                </MuiThemeProvider>

                <div>Total items count {this.props.dataContext.count}</div>                
            </div>
		)
	};
}