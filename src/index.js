import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './Stylesheet/index.scss';

class Root extends Component {
  render() {
    return <App/>;
  }
}

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);
