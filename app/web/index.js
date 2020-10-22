import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home'

const props = window && window.__reactSSRData__ && window.__reactSSRData__.getProps && window.__reactSSRData__.getProps() || {}

ReactDOM.render(<Home {...props} />, document.getElementById('root'));