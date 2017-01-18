import React from 'react';
import {render} from 'react-dom';
import ArticlesPage from './articlesPage.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(<ArticlesPage dataContext={window.data}/>, document.getElementById('root'));