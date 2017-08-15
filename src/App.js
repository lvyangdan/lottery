import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './ui/pages/Home/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </Router>
      </Provider>
      </div>
    );
  }
}

export default App;
