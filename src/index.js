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
import formControlReducer from 'store/reducers/formControls';
import tableReducer from 'store/reducers/tables';

const rootReducer = combineReducers({
  formControl: formControlReducer,
  table: tableReducer
});
const store = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
