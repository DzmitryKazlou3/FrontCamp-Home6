import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {muiTheme as customTheme} from './theme';

import NewArticle from '../components/newArticle';


export default class NewArticlePage extends React.Component {
	constructor(props) {
		super(props);
	};
    
	render() {        
		return (
            <div>
                <MuiThemeProvider muiTheme={customTheme}>
				    <div>
						<NewArticle isAuth={true}/>
					</div>
                </MuiThemeProvider>            
            </div>
		)
	};
}