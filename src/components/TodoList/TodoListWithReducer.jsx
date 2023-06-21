import React, { useReducer } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoListWithReducer({ todos, dispatch, filter }) {
  const handleAdd = (added) => {
    dispatch({ type: 'added', payload: added });
  };
  const handleUpdate = (updated) => {
    dispatch({ type: 'update', payload: updated });
  };
  const handleDelete = (deleted) => {
		dispatch({ type: 'deleted', payload: deleted });
	};
  const handleModify = (modified) => {
    dispatch({ type: 'update', payload: modified });
  };

  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            onModify={handleModify}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((t) => t.status === filter);
}
