import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const application = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(application, document.getElementById('root'));
