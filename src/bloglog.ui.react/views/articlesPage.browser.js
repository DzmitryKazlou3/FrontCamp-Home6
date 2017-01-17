import React from 'react';
import {render} from 'react-dom';
import ArticlesPage from './articlesPage.js';

render(<ArticlesPage dataContext={window.data}/>, document.getElementById('root'));