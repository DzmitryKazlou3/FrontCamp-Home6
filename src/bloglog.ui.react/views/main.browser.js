import React from 'react';
import {render} from 'react-dom';
import Main from './main.js';
import cookie from 'react-cookie';

render(<Main isAuth={cookie.load('Id') !== undefined}/>, document.getElementById('root'));