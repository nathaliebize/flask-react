import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import TodoList from './TodoList';
import store from './app/store';

ReactDOM.render(
      <Provider store={store}>
         <TodoList dispatch={store.dispatch}/>
      </Provider>, 
   document.getElementById('main'));