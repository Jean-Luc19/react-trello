require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';

import Surprise from './components/soundcloud';

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(<Board />, document.getElementById('app'))
);
