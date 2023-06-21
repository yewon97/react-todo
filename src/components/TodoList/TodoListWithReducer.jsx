import React from 'react';
import AddTodo from '../AddTodo/AddTodo';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

export default function TodoListWithReducer({ todos, dispatch, filter }) {
  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            dispatch={dispatch}
          />
        ))}
      </ul>
      <AddTodo dispatch={dispatch} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((t) => t.status === filter);
}
