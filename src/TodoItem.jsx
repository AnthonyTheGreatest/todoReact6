import React from 'react';

const TodoItem = ({checked, id, text, toggleChecked, deleteTodo}) => {
  return (
    <li>
        <input type="checkbox"
            id='checkbox'
            checked={checked}
            onClick={e => toggleChecked(id, e.target.checked)} />
        <label htmlFor="checkbox">{text}</label>
        <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
