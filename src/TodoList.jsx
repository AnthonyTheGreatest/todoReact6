import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, clearTodos, toggleChecked, deleteTodo}) => {
  return (
    <ul>
    {todos.length === 0 && <p>No todos.</p>}
    {todos.length >= 2 && <button onClick={() => clearTodos()}>Clear Todos</button>}
    <br /><br />
    {todos.map(todo => {
      return  <TodoItem {...todo}
                        key={todo.id}
                        toggleChecked={toggleChecked}
                        deleteTodo={deleteTodo} />;
    })}
  </ul>
  );
};

export default TodoList;
