import React, { useReducer } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'

export default function TodoListWithReducer({ todos, dispatch, filter }) {
	console.log('dispatc111h: ', dispatch);

  const handleAdd = (todo) => {
		dispatch({type: 'added', newTodo : todo});
  };
  const handleUpdate = (updated) => {

	}
    // setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) => {

	}
    // setTodos(todos.filter((t) => t.id !== deleted.id));
  const handleModify = (modified) => {

	}
    // setTodos(todos.map((t) => (t.id === modified.id ? modified : t)));

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
