import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//React Router
import { BrowserRouter } from 'react-router-dom';

// Redux 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducer
import clientsReducer from 'store/reducers/clients';

const store = createStore(clientsReducer);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
