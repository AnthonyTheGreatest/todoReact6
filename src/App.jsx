import {useEffect, useState} from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

const App = () => {
  // Without localStorage:
  // const [todos, setTodos] = useState([]);
  // With localSorage:
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos(prev => {
      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          text,
          checked: false
        }
      ];
    });
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const toggleChecked = (id, checked) => {
    setTodos(prev => {
      return prev.map(todo => {
        return todo.id === id ? {...todo, checked} : todo;
      });
    });
  };

  const deleteTodo = id => {
    setTodos(prev => {
      return prev.filter(todo => todo.id !== id);
    });
  };

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1>Todo List</h1>
      <TodoList todos={todos}
                clearTodos={clearTodos}
                toggleChecked={toggleChecked}
                deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
