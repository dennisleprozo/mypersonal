import React, { Component } from 'react';
import './App.css';
import routes from './components/routes'


class App extends Component {
  render() {
    return (
      <div>
        {routes}
      </div>
    );
  }
}
export default App;
