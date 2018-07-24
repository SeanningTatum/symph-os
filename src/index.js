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
import contactsReducer from 'store/reducers/contacts';
import formControlReducer from 'store/reducers/formControls';
import employeeReducer from 'store/reducers/employees';
import tableReducer from 'store/reducers/tables';

const rootReducer = combineReducers({
  client: clientsReducer, 
  contact: contactsReducer, 
  formControl: formControlReducer,
  employee: employeeReducer,
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
