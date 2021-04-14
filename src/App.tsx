import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

class App extends React.Component<{}, {}> {
   render() {
      return (
         <div>
            <TodoList />
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('main'));