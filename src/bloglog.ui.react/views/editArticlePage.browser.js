import React from 'react';
import {render} from 'react-dom';
import EditArticlePage from './editArticlePage';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(<EditArticlePage dataContext={window.data}/>, document.getElementById('root'));