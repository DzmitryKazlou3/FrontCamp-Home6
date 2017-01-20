import React from 'react';
import {render} from 'react-dom';
import NewArticlePage from './newArticlePage.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(<NewArticlePage dataContext={window.data}/>, document.getElementById('root'));