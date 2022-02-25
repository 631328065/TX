import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router/index.js';

//引入重置样式
// import 'reset-css'

// 引入蚂蚁ui
import 'antd/dist/antd.min.js'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

// 引入px转rem
import 'react-flexible'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
	
reportWebVitals();
