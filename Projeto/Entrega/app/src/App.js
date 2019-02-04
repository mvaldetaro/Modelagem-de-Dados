import React, {Component} from 'react';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import AppReducer from './AppReducer'
import thunk from 'redux-thunk'

import Header from "./template/Header";
import Footer from "./template/Footer";
import Main from './views/Main';
import './App.css';

import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from "./theme";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(thunk)(createStore)(AppReducer, devTools);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div className="app">
            <Header/>
            <Main/>
            <Footer/>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
