import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './TodoList';
import { store } from './app/store'

const render = () => {
   ReactDOM.render(<TodoList state={store.getState()} dispatch={store.dispatch}/>, document.getElementById('main'));
}

store.subscribe(render);
render();