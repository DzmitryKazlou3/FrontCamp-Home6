import React from 'react';
import {render} from 'react-dom';
import ArticleDetailsPage from './articleDetailsPage';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(<ArticleDetailsPage article={window.data.article} comments={window.data.comments} token={window.data.token} user_id={window.data.user_id}/>, document.getElementById('root'));