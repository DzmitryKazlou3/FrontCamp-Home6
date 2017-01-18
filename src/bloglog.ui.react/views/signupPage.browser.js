import React from 'react';
import {render} from 'react-dom';
import SingUpPage from './signupPage.js';
import cookie from 'react-cookie';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(<SingUpPage />, document.getElementById('root'));