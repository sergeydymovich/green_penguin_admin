import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index-reducer.js";
import "./index.css";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);

ReactDOM.render(
  <Provider store={store}>
			<App />
	</Provider>,
  document.getElementById('root')
);
