import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {muiTheme as customTheme} from './theme';

import ArticlesList from '../components/articlesList.js';
import { logOut } from '../services/auth.service.js';


export default class ArticlesPage extends React.Component {
	constructor(props) {
		super(props);
	};
    
	render() {
		return (
            <div>
                <MuiThemeProvider muiTheme={customTheme}>
				    <div>
						<div className="toolBar">
							<RaisedButton label="Home" href="/react" />
							{this.props.dataContext.isAuth &&
								<RaisedButton label="Log Out"onClick={logOut}/>}								
							{this.props.dataContext.isAuth &&
								<RaisedButton label="Add article" href="/react/newarticle/"/>}
						</div>
                        <ArticlesList articles={this.props.dataContext.articles}/>
					</div>
                </MuiThemeProvider>

                <div>Total items count {this.props.dataContext.count}</div>
            </div>
		)
	};
}